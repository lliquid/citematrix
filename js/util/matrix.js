/**
 * Created by user on 4/16/14.
 */
matrix = function () {
    var m = {
        version: '0.0',
        consts: {
            ZERO: 1e-9
        },
        //initialize a zero matrix with m rows and n columns
        zeros : function (m, n) {
            var mat = [];
            for (var i= 0; i < m; i++) {
                var row = [];
                mat.push(row);
                for (var j = 0; j < n; j++) {
                    row.push(0);
                }
            }
            return mat;
        },
        identity: function(m) {
            var mat = this.zeros(m, m);
            for (var i = 0; i < m; i++) {
                mat[i][i] = 1;
            }
            return mat;
        },
        trace: function(mat) {
            var tr = [];
            for (var i = 0, ii = mat.length; i < ii; i++) {
                tr.push(mat[i][i]);
            }
            return tr;
        },
        col: function(j, mat) {
            var entries = [];
            for (var i = 0, ii = mat.length; i < ii; i ++) {
                entries.push(mat[i][j]);
            }
            return entries;
        },

        //return eigenvectors and eigenvalues
        //depend on science.lin.decompose routine in the package science.js
        //https://github.com/jasondavies/science.js/
        eigen: function(mat) {
            var decomposefunc = science.lin.decompose();
            var rs = decomposefunc.call(null, mat);
            var es = this.trace(rs.D)
                o = algo.order(es);
            var ev = [];
            for (var i = 0, ii = o.length; i < ii; i ++) {
                ev.push(this.col(o[i], rs.V));
            }
            algo.sort(es);
            //IDX is the first nonzero eigenvalue
            var i = 0;
            for (ii = es.length; i < ii; i ++) {
                if (Math.abs(es[i]) > this.consts.ZERO)
                    break;
            }
            return {E : es, V: ev, IDX: i};
        },
//      NOTE: we have to find rectangular area
        find_maximum_rectangle: function(mat) {
            //find rectangle with maximum area in the matrix
            var nrows = m.get_num_rows(mat),
                ncols = m.get_num_cols(mat),
                s = m.zeros(nrows, ncols),
                i0 = 0,
                j0 = 0,
                height = 0,
                width = 0;

            if (nrows == 0 || ncols == 0) return null;

            //histogram
            for (var i=0; i < nrows; i++) {
                var cnt = 0;
                for (var j=ncols-1; j >= 0; j--) {
                    if (mat[i][j] > 0)
                        cnt ++;
                    else
                        cnt = 0;
                    s[i][j] = cnt;
                }
            }

            var stack = [],
                area = 0;

            //maximum rectangle area in a histogram
            for (var j=0; j < ncols; j++) {
                var i = 0;
                while(i < nrows) {
                    if(stack.length == 0 || s[stack[stack.length-1]][j] <= s[i][j])
                        stack.push(i++);
                    else {
                        var tp = stack[stack.length-1];
                        stack.pop();
                        //stack is empty, all previous values larger than s[i][j]
                        //tp is the most previous one
                        if (stack.length == 0) {
                            if (i * s[tp][j] > area) {
                                area = i * s[tp][j];
                                i0 = tp;
                                j0 = j;
                                width = s[tp][j];
                                height = i;
                            }
                        }
                        else {
                            if ((i - stack[stack.length-1] -1) * s[tp][j] > area) {
                                area = (i - stack[stack.length-1] -1) * s[tp][j];
                                i0 = stack[stack.length-1] + 1;
                                j0 = j;
                                width = s[tp][j];
                                height = i - stack[stack.length-1] -1;
                            }
                        }
                    }
                }

                while (stack.length > 0) {
                   var tp = stack[stack.length-1];
                    stack.pop();
                    if (stack.length == 0) {
                        if (i * s[tp][j] > area) {
                            area = i * s[tp][j];
                            i0 = tp;
                            j0 = j;
                            width = s[tp][j];
                            height = i;
                        }
                    }
                    else {
                        if ((i - stack[stack.length-1] -1) * s[tp][j] > area) {
                            area = (i - stack[stack.length-1] -1) * s[tp][j];
                            i0 = stack[stack.length-1] + 1;
                            j0 = j;
                            width = s[tp][j];
                            height = i - stack[stack.length-1] -1;
                        }
                    }
                }
            }

            return {i0: i0, j0: j0, height: height, width: width};
        },
        clean_rectangle: function(i0, j0, height, width, mat) {
            for (var i=i0, ii=height + i0; i < ii; i++) {
                for (var j=j0, jj=width + j0; j < jj; j++) {
                    mat[i][j] = 0;
                }
            }
            return mat;
        },
        is_zero: function(mat) {
            var flag = true;
            for (var i= 0, ii= m.get_num_rows(mat); i < ii; i++) {
                for (var j= 0, jj= m.get_num_cols(mat); j < jj; j++) {
                    if (mat[i][j] != 0)
                        flag = false;
                }
            }
            return flag;
        },
        //find the nearest empty entry in the matrix with a spiral order
        find_nearest_empty_entry: function (i, j, mat) {
            if (i<0||i>=m.get_num_rows(mat)||j<0||j>=m.get_num_cols(mat)) {
                var ii = i,
                    jj = j;
                if (i < 0) ii = 0;
                if (i>= m.get_num_rows(mat)) ii = m.get_num_rows(mat) - 1;
                if (j < 0) jj = 0;
                if (j>= m.get_num_cols(mat)) jj = m.get_num_cols(mat) - 1;
                return {i: ii, j: jj};
            }
            var ii = i,
                jj = j,
                k = 0;
            while (mat[ii][jj] != 0) {
                if (ii == i - k && jj == j - k ) {
                    ii -= 1;
                    k += 1;
                }
                else if (ii == i - k && jj < j + k) {
                    jj += 1;
                }
                else if (jj == j + k && ii < i + k) {
                    ii += 1;
                }
                else if (ii == i + k && jj > j - k) {
                    jj -= 1;
                }
                else if (jj == j - k && ii > i - k) {
                    ii -= 1;
                }

                if (ii<0||ii>=m.get_num_rows(mat)||jj<0||jj>=m.get_num_cols(mat)) {
                    if (ii < 0) ii = 0;
                    if (ii>= m.get_num_rows(mat)) ii = m.get_num_rows(mat) - 1;
                    if (jj < 0) jj = 0;
                    if (jj>= m.get_num_cols(mat)) jj = m.get_num_cols(mat) - 1;
                    return {i: ii, j: jj};
                }

            }
            return {i: ii, j: jj};
        },
        get_num_rows: function(mat) {
            return mat.length;
        },
        get_num_cols: function(mat) {
            if (mat.length == 0)
                return 0;
            else
                return mat[0].length;
        },
        to_string: function(mat) {
            var str = '';
            var nrows = m.get_num_rows(mat),
                ncols = m.get_num_cols(mat);
        },
        //test spiral
        test_spiral: function() {
            var mat = matrix.zeros(7, 7);
            for (var i = 0, ii = 36; i < ii; i++) {
                var entry = m.find_nearest_empty_entry(3, 3, mat);
                mat[entry.i][entry.j] = 1;
                console.info(entry);
            }
        },
        //test finding maximum rectangle
        //passed simple test, should be ok
        test_max_rectangle: function() {
            var mat = matrix.zeros(8, 8);
            for (var i = 0, ii = 30; i < ii; i++) {
                var entry = m.find_nearest_empty_entry(3, 3, mat);
                mat[entry.i][entry.j] = 1;
            }
            console.info(mat);
            m.find_maximum_rectangle(mat);
        }
    };
    return m;
}();
