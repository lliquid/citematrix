/**
 * Created by user on 9/6/14.
 */
// This product includes color specifications and designs developed by Cynthia Brewer (http://colorbrewer.org/).
var colorbrewer = {YlGn: {
3: ["#f7fcb9","#addd8e","#31a354"],
4: ["#ffffcc","#c2e699","#78c679","#238443"],
5: ["#ffffcc","#c2e699","#78c679","#31a354","#006837"],
6: ["#ffffcc","#d9f0a3","#addd8e","#78c679","#31a354","#006837"],
7: ["#ffffcc","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#005a32"],
8: ["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#005a32"],
9: ["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"]
},YlGnBu: {
3: ["#edf8b1","#7fcdbb","#2c7fb8"],
4: ["#ffffcc","#a1dab4","#41b6c4","#225ea8"],
5: ["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],
6: ["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#2c7fb8","#253494"],
7: ["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"],
8: ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"],
9: ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"]
},GnBu: {
3: ["#e0f3db","#a8ddb5","#43a2ca"],
4: ["#f0f9e8","#bae4bc","#7bccc4","#2b8cbe"],
5: ["#f0f9e8","#bae4bc","#7bccc4","#43a2ca","#0868ac"],
6: ["#f0f9e8","#ccebc5","#a8ddb5","#7bccc4","#43a2ca","#0868ac"],
7: ["#f0f9e8","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"],
8: ["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"],
9: ["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"]
},BuGn: {
3: ["#e5f5f9","#99d8c9","#2ca25f"],
4: ["#edf8fb","#b2e2e2","#66c2a4","#238b45"],
5: ["#edf8fb","#b2e2e2","#66c2a4","#2ca25f","#006d2c"],
6: ["#edf8fb","#ccece6","#99d8c9","#66c2a4","#2ca25f","#006d2c"],
7: ["#edf8fb","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#005824"],
8: ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#005824"],
9: ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"]
},PuBuGn: {
3: ["#ece2f0","#a6bddb","#1c9099"],
4: ["#f6eff7","#bdc9e1","#67a9cf","#02818a"],
5: ["#f6eff7","#bdc9e1","#67a9cf","#1c9099","#016c59"],
6: ["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#1c9099","#016c59"],
7: ["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"],
8: ["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"],
9: ["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"]
},PuBu: {
3: ["#ece7f2","#a6bddb","#2b8cbe"],
4: ["#f1eef6","#bdc9e1","#74a9cf","#0570b0"],
5: ["#f1eef6","#bdc9e1","#74a9cf","#2b8cbe","#045a8d"],
6: ["#f1eef6","#d0d1e6","#a6bddb","#74a9cf","#2b8cbe","#045a8d"],
7: ["#f1eef6","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"],
8: ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"],
9: ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"]
},BuPu: {
3: ["#e0ecf4","#9ebcda","#8856a7"],
4: ["#edf8fb","#b3cde3","#8c96c6","#88419d"],
5: ["#edf8fb","#b3cde3","#8c96c6","#8856a7","#810f7c"],
6: ["#edf8fb","#bfd3e6","#9ebcda","#8c96c6","#8856a7","#810f7c"],
7: ["#edf8fb","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"],
8: ["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"],
9: ["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"]
},RdPu: {
3: ["#fde0dd","#fa9fb5","#c51b8a"],
4: ["#feebe2","#fbb4b9","#f768a1","#ae017e"],
5: ["#feebe2","#fbb4b9","#f768a1","#c51b8a","#7a0177"],
6: ["#feebe2","#fcc5c0","#fa9fb5","#f768a1","#c51b8a","#7a0177"],
7: ["#feebe2","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177"],
8: ["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177"],
9: ["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"]
},PuRd: {
3: ["#e7e1ef","#c994c7","#dd1c77"],
4: ["#f1eef6","#d7b5d8","#df65b0","#ce1256"],
5: ["#f1eef6","#d7b5d8","#df65b0","#dd1c77","#980043"],
6: ["#f1eef6","#d4b9da","#c994c7","#df65b0","#dd1c77","#980043"],
7: ["#f1eef6","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#91003f"],
8: ["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#91003f"],
9: ["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"]
},OrRd: {
3: ["#fee8c8","#fdbb84","#e34a33"],
4: ["#fef0d9","#fdcc8a","#fc8d59","#d7301f"],
5: ["#fef0d9","#fdcc8a","#fc8d59","#e34a33","#b30000"],
6: ["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#e34a33","#b30000"],
7: ["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"],
8: ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"],
9: ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]
},YlOrRd: {
3: ["#ffeda0","#feb24c","#f03b20"],
4: ["#ffffb2","#fecc5c","#fd8d3c","#e31a1c"],
5: ["#ffffb2","#fecc5c","#fd8d3c","#f03b20","#bd0026"],
6: ["#ffffb2","#fed976","#feb24c","#fd8d3c","#f03b20","#bd0026"],
7: ["#ffffb2","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026"],
8: ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026"],
9: ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"]
},YlOrBr: {
3: ["#fff7bc","#fec44f","#d95f0e"],
4: ["#ffffd4","#fed98e","#fe9929","#cc4c02"],
5: ["#ffffd4","#fed98e","#fe9929","#d95f0e","#993404"],
6: ["#ffffd4","#fee391","#fec44f","#fe9929","#d95f0e","#993404"],
7: ["#ffffd4","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#8c2d04"],
8: ["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#8c2d04"],
9: ["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"]
},Purples: {
3: ["#efedf5","#bcbddc","#756bb1"],
4: ["#f2f0f7","#cbc9e2","#9e9ac8","#6a51a3"],
5: ["#f2f0f7","#cbc9e2","#9e9ac8","#756bb1","#54278f"],
6: ["#f2f0f7","#dadaeb","#bcbddc","#9e9ac8","#756bb1","#54278f"],
7: ["#f2f0f7","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#4a1486"],
8: ["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#4a1486"],
9: ["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"]
},Blues: {
3: ["#deebf7","#9ecae1","#3182bd"],
4: ["#eff3ff","#bdd7e7","#6baed6","#2171b5"],
5: ["#eff3ff","#bdd7e7","#6baed6","#3182bd","#08519c"],
6: ["#eff3ff","#c6dbef","#9ecae1","#6baed6","#3182bd","#08519c"],
7: ["#eff3ff","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],
8: ["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],
9: ["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"]
},Greens: {
3: ["#e5f5e0","#a1d99b","#31a354"],
4: ["#edf8e9","#bae4b3","#74c476","#238b45"],
5: ["#edf8e9","#bae4b3","#74c476","#31a354","#006d2c"],
6: ["#edf8e9","#c7e9c0","#a1d99b","#74c476","#31a354","#006d2c"],
7: ["#edf8e9","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#005a32"],
8: ["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#005a32"],
9: ["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"]
},Oranges: {
3: ["#fee6ce","#fdae6b","#e6550d"],
4: ["#feedde","#fdbe85","#fd8d3c","#d94701"],
5: ["#feedde","#fdbe85","#fd8d3c","#e6550d","#a63603"],
6: ["#feedde","#fdd0a2","#fdae6b","#fd8d3c","#e6550d","#a63603"],
7: ["#feedde","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#8c2d04"],
8: ["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#8c2d04"],
9: ["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"]
},Reds: {
3: ["#fee0d2","#fc9272","#de2d26"],
4: ["#fee5d9","#fcae91","#fb6a4a","#cb181d"],
5: ["#fee5d9","#fcae91","#fb6a4a","#de2d26","#a50f15"],
6: ["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#de2d26","#a50f15"],
7: ["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#99000d"],
8: ["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#99000d"],
9: ["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"]
},Greys: {
3: ["#f0f0f0","#bdbdbd","#636363"],
4: ["#f7f7f7","#cccccc","#969696","#525252"],
5: ["#f7f7f7","#cccccc","#969696","#636363","#252525"],
6: ["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#636363","#252525"],
7: ["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525"],
8: ["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525"],
9: ["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"]
},PuOr: {
3: ["#f1a340","#f7f7f7","#998ec3"],
4: ["#e66101","#fdb863","#b2abd2","#5e3c99"],
5: ["#e66101","#fdb863","#f7f7f7","#b2abd2","#5e3c99"],
6: ["#b35806","#f1a340","#fee0b6","#d8daeb","#998ec3","#542788"],
7: ["#b35806","#f1a340","#fee0b6","#f7f7f7","#d8daeb","#998ec3","#542788"],
8: ["#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788"],
9: ["#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788"],
10: ["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],
11: ["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"]
},BrBG: {
3: ["#d8b365","#f5f5f5","#5ab4ac"],
4: ["#a6611a","#dfc27d","#80cdc1","#018571"],
5: ["#a6611a","#dfc27d","#f5f5f5","#80cdc1","#018571"],
6: ["#8c510a","#d8b365","#f6e8c3","#c7eae5","#5ab4ac","#01665e"],
7: ["#8c510a","#d8b365","#f6e8c3","#f5f5f5","#c7eae5","#5ab4ac","#01665e"],
8: ["#8c510a","#bf812d","#dfc27d","#f6e8c3","#c7eae5","#80cdc1","#35978f","#01665e"],
9: ["#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e"],
10: ["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],
11: ["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"]
},PRGn: {
3: ["#af8dc3","#f7f7f7","#7fbf7b"],
4: ["#7b3294","#c2a5cf","#a6dba0","#008837"],
5: ["#7b3294","#c2a5cf","#f7f7f7","#a6dba0","#008837"],
6: ["#762a83","#af8dc3","#e7d4e8","#d9f0d3","#7fbf7b","#1b7837"],
7: ["#762a83","#af8dc3","#e7d4e8","#f7f7f7","#d9f0d3","#7fbf7b","#1b7837"],
8: ["#762a83","#9970ab","#c2a5cf","#e7d4e8","#d9f0d3","#a6dba0","#5aae61","#1b7837"],
9: ["#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837"],
10: ["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],
11: ["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"]
},PiYG: {
3: ["#e9a3c9","#f7f7f7","#a1d76a"],
4: ["#d01c8b","#f1b6da","#b8e186","#4dac26"],
5: ["#d01c8b","#f1b6da","#f7f7f7","#b8e186","#4dac26"],
6: ["#c51b7d","#e9a3c9","#fde0ef","#e6f5d0","#a1d76a","#4d9221"],
7: ["#c51b7d","#e9a3c9","#fde0ef","#f7f7f7","#e6f5d0","#a1d76a","#4d9221"],
8: ["#c51b7d","#de77ae","#f1b6da","#fde0ef","#e6f5d0","#b8e186","#7fbc41","#4d9221"],
9: ["#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221"],
10: ["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],
11: ["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"]
},RdBu: {
3: ["#ef8a62","#f7f7f7","#67a9cf"],
4: ["#ca0020","#f4a582","#92c5de","#0571b0"],
5: ["#ca0020","#f4a582","#f7f7f7","#92c5de","#0571b0"],
6: ["#b2182b","#ef8a62","#fddbc7","#d1e5f0","#67a9cf","#2166ac"],
7: ["#b2182b","#ef8a62","#fddbc7","#f7f7f7","#d1e5f0","#67a9cf","#2166ac"],
8: ["#b2182b","#d6604d","#f4a582","#fddbc7","#d1e5f0","#92c5de","#4393c3","#2166ac"],
9: ["#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac"],
10: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],
11: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"]
},RdGy: {
3: ["#ef8a62","#ffffff","#999999"],
4: ["#ca0020","#f4a582","#bababa","#404040"],
5: ["#ca0020","#f4a582","#ffffff","#bababa","#404040"],
6: ["#b2182b","#ef8a62","#fddbc7","#e0e0e0","#999999","#4d4d4d"],
7: ["#b2182b","#ef8a62","#fddbc7","#ffffff","#e0e0e0","#999999","#4d4d4d"],
8: ["#b2182b","#d6604d","#f4a582","#fddbc7","#e0e0e0","#bababa","#878787","#4d4d4d"],
9: ["#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d"],
10: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],
11: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"]
},RdYlBu: {
3: ["#fc8d59","#ffffbf","#91bfdb"],
4: ["#d7191c","#fdae61","#abd9e9","#2c7bb6"],
5: ["#d7191c","#fdae61","#ffffbf","#abd9e9","#2c7bb6"],
6: ["#d73027","#fc8d59","#fee090","#e0f3f8","#91bfdb","#4575b4"],
7: ["#d73027","#fc8d59","#fee090","#ffffbf","#e0f3f8","#91bfdb","#4575b4"],
8: ["#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4"],
9: ["#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4"],
10: ["#a50026","#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],
11: ["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"]
},Spectral: {
3: ["#fc8d59","#ffffbf","#99d594"],
4: ["#d7191c","#fdae61","#abdda4","#2b83ba"],
5: ["#d7191c","#fdae61","#ffffbf","#abdda4","#2b83ba"],
6: ["#d53e4f","#fc8d59","#fee08b","#e6f598","#99d594","#3288bd"],
7: ["#d53e4f","#fc8d59","#fee08b","#ffffbf","#e6f598","#99d594","#3288bd"],
8: ["#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd"],
9: ["#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
10: ["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],
11: ["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"]
},RdYlGn: {
3: ["#fc8d59","#ffffbf","#91cf60"],
4: ["#d7191c","#fdae61","#a6d96a","#1a9641"],
5: ["#d7191c","#fdae61","#ffffbf","#a6d96a","#1a9641"],
6: ["#d73027","#fc8d59","#fee08b","#d9ef8b","#91cf60","#1a9850"],
7: ["#d73027","#fc8d59","#fee08b","#ffffbf","#d9ef8b","#91cf60","#1a9850"],
8: ["#d73027","#f46d43","#fdae61","#fee08b","#d9ef8b","#a6d96a","#66bd63","#1a9850"],
9: ["#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850"],
10: ["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],
11: ["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"]
},Accent: {
3: ["#7fc97f","#beaed4","#fdc086"],
4: ["#7fc97f","#beaed4","#fdc086","#ffff99"],
5: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0"],
6: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f"],
7: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17"],
8: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"]
},Dark2: {
3: ["#1b9e77","#d95f02","#7570b3"],
4: ["#1b9e77","#d95f02","#7570b3","#e7298a"],
5: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e"],
6: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02"],
7: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d"],
8: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"]
},Paired: {
3: ["#a6cee3","#1f78b4","#b2df8a"],
4: ["#a6cee3","#1f78b4","#b2df8a","#33a02c"],
5: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99"],
6: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c"],
7: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f"],
8: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00"],
9: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6"],
10: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a"],
11: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99"],
12: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"]
},Pastel1: {
3: ["#fbb4ae","#b3cde3","#ccebc5"],
4: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4"],
5: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6"],
6: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc"],
7: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd"],
8: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec"],
9: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]
},Pastel2: {
3: ["#b3e2cd","#fdcdac","#cbd5e8"],
4: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4"],
5: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9"],
6: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae"],
7: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc"],
8: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"]
},Set1: {
3: ["#e41a1c","#377eb8","#4daf4a"],
4: ["#e41a1c","#377eb8","#4daf4a","#984ea3"],
5: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00"],
6: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33"],
7: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628"],
8: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf"],
9: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"]
},Set2: {
3: ["#66c2a5","#fc8d62","#8da0cb"],
4: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3"],
5: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854"],
6: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f"],
7: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494"],
8: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"]
},Set3: {
3: ["#8dd3c7","#ffffb3","#bebada"],
4: ["#8dd3c7","#ffffb3","#bebada","#fb8072"],
5: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3"],
6: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462"],
7: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69"],
8: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5"],
9: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9"],
10: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd"],
11: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5"],
12: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]
}};
EventDispatcher = function(ctx) {
    this.listeners = {};
    this.context = ctx;
};

var eproto = EventDispatcher.prototype;

eproto.on = function(event, f) {
    var ls = this.listeners;
    if (!ls.hasOwnProperty(event))
        ls[event] = [];
    ls[event].push(f);
    return this;
}

eproto.off = function(event, f) {
    //TODO: -low turn off listeners
    return this;
}

//pass object as args
eproto.fire = function(event, args) {
    var ls = this.listeners;
    if (!ls.hasOwnProperty(event))
        return;
    var fs = ls[event];
    for (var i= 0, ii=fs.length;i<ii;i+=1) {
        fs[i].call(this.context, args);
    }
}


eproto.setEventDispatchContext = function(ctx) {
    this.context = ctx;
}


/**
 * Created by panpan on 4/16/14.
 */
geom = function () {
    var g = {version: "0.0"};

    //please be careful of the applying orders
    g.transform = {
        value: '',
        begin: function() {
            this.value = '';
            return this;
        },
        end: function() {
            return this.value;
        },
        translate: function(dx, dy) {
            this.value += 'translate(' + dx + ',' + dy + ')';
            return this;
        },
        rotate: function(theta, x0, y0) {
            this.value += 'rotate(' + theta + ',' + x0 + ',' + y0 + ')';
            return this;
        },
        scale: function(fx, fy) {
            this.value += 'scale(' + fx + ',' + fy + ')';
            return this;
        }
    };

    /*
     get a path string by chaining functions
     example:
     g.path.begin() [.move_to(args), ...] .end()
    */
    g.path = {
        value:'',
        x:0,
        y:0,
        s: 0.5, //for curve easing
        
        begin: function(){
            this.value = '';
            return this;
        },
        
        move_to: function(arg0, arg1) {

            if (arguments.length == 1) {
                this.value += ' M ' + arg0.x + ' ' + arg0.y;
                this.x = arg0.x;
                this.y = arg0.y;
            }
            else {
                this.value += ' M ' + arg0 + ' ' + arg1;
                this.x = arg0;
                this.y = arg1;
            }

            return this;
        
        },
        
        line_to: function(arg0, arg1) {

            if (arguments.length == 1) {
                this.value += ' L ' + arg0.x + ' ' + arg0.y;
                this.x = arg0.x;
                this.y = arg0.y;
            }
            else {
                this.value += ' L ' + arg0 + ' ' + arg1;
                this.x = arg0;
                this.y = arg1;
            }

            return this;
        },

        curve_with_width: function(p0, p1, c0, c1, w0, w1) {

            //TODO: bezier curve with varying width


            return this;
        },

        eased_line_to: function(x, y) {
            var c0x = this.x,
                c0y = this.y,
                c1x = x,
                c1y = y;
            if ((x-this.x) * (y-this.y) > 0) {
                c0y = this.y * (1 - this.s) + y * this.s;
                c1x = this.x * this.s + x * (1 - this.s);
            }
            else {
                c0x = this.x * (1 - this.s) + x * this.s;
                c1y = this.y * this.s + y * (1 - this.s);
            }
            this.bezier_to(c0x, c0y, c1x, c1y, x, y);
            return this;
        },
        h_eased_line_to: function(x, y) {
            this.bezier_to(this.x * (1-this.s) + x * this.s, this.y, this.x * this.s + x * (1-this.s) , y, x, y);
            return this;
        },

        v_eased_line_to: function(x, y) {
            this.bezier_to(this.x, this.y * (1-this.s) + y * this.s, x, this.y * this.s + y * (1-this.s), x, y);
            return this;
        },

        horizontal_to: function (x) {
            this.x = x;
            return this.line_to(x, this.y);
        },
        vertical_to: function(y) {
            this.y = y;
            return this.line_to(this.x, y);
        },
        horizontal_to_relative: function(x) {
            this.value += ' h ' + x;
            this.x = this.x + x;
            return this;
        },
        vertical_to_relative: function(y) {
            this.value += ' v ' + y;
            this.y = this.y + y;
            return this;
        },
        bezier_to: function(cx0, cy0, cx1, cy1, x1, y1) {
            this.x = x1;
            this.y = y1;
            this.value += ' C ' + cx0  + ',' + cy0 + ' ' + cx1 + ', ' + cy1 + ' ' + x1 + ', ' + y1;
            return this;
        },
        close_path: function() {
            this.value += ' Z ';
            return this;
        },
        end: function() {
            return this.value;
        }
    }

    return g;
}();

/**
 * Created by user on 9/8/14.
 */

var d3behaviour = {

    highlight: function () {
        d3.select(this)
            .on('mouseover.highlightAndSelection', function () {
                d3.select(this).classed('highlight', true);
            })
            .on('mouseout.highlightAndSelection', function () {
                d3.select(this).classed('highlight', false);
            });
    },


    highlightAndSelection: function () {
        d3.select(this)
            .on('mouseover.highlightAndSelection', function () {
                d3.select(this).classed('highlight', true);
            })
            .on('mouseout.highlightAndSelection', function () {
                d3.select(this).classed('highlight', false);
            })
            .on('click.highlightAndSelection', function () {
                if (d3.select(this).classed('selected')) {
                    d3.select(this).classed('selected', false);
                }
                else {
                    d3.select(this).classed('selected', true);
                }
            });
    }

}
var Legend = function(title, canvas, config) {


    this.id = 'legend_' + Date.now();

    this.canvas = canvas.append('g')
        .attr('class', 'legend')
        .attr('id', this.id);
    this.config = config;
    this.title = title;

    this.draw();
}

_.extend(Legend.prototype, {

    _pair: function(array) {
        return array.slice(1)
            .map(function(b, i) {
                return [array[i], b];
            });
    },

    domain: function(domain) {
        this.config.domain = domain;
        return this;
    },

    position: function(coord) {
        this.config.x = coord.x;
        this.config.y = coord.y;
        return this;
    },

    title: function(str) {
        this.title = str;
        return this;
    },

    colorScale: function(colorScale) {
        this.config.colorScale = colorScale;
        return this;
    },

    draw: function() {

        var cfg = this.config,
            dmn = cfg.domain;

        var step = (dmn.max - dmn.min) / cfg.nsteps;

        this.canvas.attr('transform', geom.transform.begin()
            .translate(cfg.x, cfg.y)
            .end());

        var x = d3.scale.linear()
            .domain([dmn.min, dmn.max])
            .range([0, cfg.width]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .tickSize(cfg.tickFontSize)
            .tickFormat(d3.format('d'));

        var colorMap = d3.scale.linear()
            .domain(d3.range(dmn.min, dmn.max + step, step))
            .range(cfg.colorScale)
            .interpolate(d3.interpolateHsl);

        this.canvas.selectAll('rect')
            .data(this._pair(x.ticks(this.nsteps)))
            .enter()
            .append("rect")
            .attr('class', 'step')
            .attr("x", function(d) {
                return x(d[0]);
            })
            .attr("y", 0)
            .attr("width", function(d) {
                return x(d[1]) - x(d[0]);
            })
            .attr("height", cfg.height)
            .attr("fill", function(d) {
                return colorMap(d[0]);
            });

        this.canvas.call(xAxis)
            .append('text')
            .text(this.title)
            .attr('y', -3);

    },

    clear: function() {
        this.canvas.selectAll('*')
            .remove();
        return this;
    },

    update: function() {
        this.clear()
            .draw();
    }

});


var CategoricalLegend = function(title, canvas, config) {


    //     _.extend(cfg, app.config.legendBox);
    // _.extend(cfg, app.config.legendCoords[i]);
    // _.extend(cfg, {
    //     colorScale: app.config.scalarColorMap,
    //     domain: {
    //         min: 0,
    //         max: app.config.maxIntersectionCnt[i]
    //     },
    //     nsteps: app.config.legendSteps,
    //     tickFontSize: app.config.legendTickFontSize
    // });


    this.id = 'categoricallegend_' + Date.now();

    this.canvas = canvas.append('g')
        .attr('class', 'legend')
        .attr('id', this.id);

    this.config = config;
    this.title = title;

    this.draw();
}

_.extend(CategoricalLegend.prototype, {

    draw: function() {

        var cfg = this.config,
            colorMaper = cfg.colorMaper;

        var values = cfg.colorMaper.domain();

        this.canvas.selectAll('rect')
            .data(values)
            .enter()
            .append("rect")
            .attr('class', 'step')
            .attr("x", cfg.x)
            .attr("y", function(val, i) {
                return cfg.height * i;
            })
            .attr("width", 8)
            .attr("height", cfg.height - 3)
            .attr("fill", function(val) {
                return colorMaper(val);
            });

        this.canvas.selectAll('text')
            .data(values)
            .enter()
            .append('text')
            .attr('x', cfg.x + 18)
            .attr("y", function(val, i) {
                return cfg.height * i + 16;
            })
            .text(function(val){return val;});


        this.canvas
            .append('text')
            .text(this.title)
            .attr('y', -3);

    },

    clear: function() {
        this.canvas.selectAll('*')
            .remove();
        return this;
    },

    update: function() {
        this.clear()
            .draw();
    }

});


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

/*
 created by panpan xpp2007@gmail.com
 */

Graph = function() {

    var self = this;

    this.empty = function() {

        this.nodes = [];
        this.links = [];
        this.adjlinks = [];

        this.nodeIdx = {};
        this.linkIdx = {};

        this.invalidNodeIndices = [];
        this.nextNodeIdx = 0;
        this.invalidEdgeIndices = [];
        this.nextEdgeIdx = 0;

        return this;
    };

    this.empty();

};

_.extend(Graph.prototype, {

    addNode: function(nid, params) {

        if (this.node(nid) != null) { //check if nid is already in
            console.info('node ' + nid + 'already in');
            return;
        }

        var n = {
            id: nid + '',
            name: '',
            attrs: {}
        };

        var nidx = -1;

        if (this.invalidNodeIndices.length == 0) {
            this.nodes.push(undefined);
            this.adjlinks.push(undefined);
            nidx = this.nextNodeIdx;
            this.nextNodeIdx ++;
        } else {
            nidx = this.invalidNodeIndices.pop();
        }
        this.nodes[nidx] = n;
        this.adjlinks[nidx] = [];
        this.nodeIdx[nid] = nidx;
        this.updateNodeAttrs(params, nid);
        return this;
    },


    addLink: function(eid, source, target, params) {

        if (this.link(eid) != null) {
            console.info('link ' + eid + 'already in');
            return;
        }

        var e = {
            id: eid + '',
            source: source + '',
            target: target + '',
            attrs: {}
        };

        if (this.node(source) == undefined) {
            this.addNode(source);
        }
        if (this.node(target) == undefined) {
            this.addNode(target);
        }

        var eidx = -1;

        if (this.invalidEdgeIndices.length == 0) {
            this.links.push(null);
            eidx = this.nextEdgeIdx;
            this.nextEdgeIdx ++;
        } else {
            eidx = this.invalidEdgeIndices.pop();
        }

        var sidx = this.nodeIdx[source],
            tidx = this.nodeIdx[target];

        this.links[eidx] = e;
        this.linkIdx[eid] = eidx;

        this.adjlinks[sidx].push(eid);
        this.adjlinks[tidx].push(eid);

        this.updateLinkAttrs(params, eid);
        return this;
    },

    removeNode:  function(nid) {

        if (!this.hasNode(nid)) {
            console.info("node " + nid + " not exist");
            return;
        }

        //remove links first
        var adjs=this.adjacents(nid).slice(0);
        for (var i= 0; i< adjs.length; i++) {
            this.removeLink(adjs[i]);
        }

        var nidx = this.nodeIdx[nid];
        this.invalidNodeIndices.push(nidx);
        this.nodes[nidx] = undefined;
        this.nodeIdx[nid] = undefined;
        this.adjlinks[nidx] = undefined;

        return this;
    },

    removeLink: function(arg0, arg1) {

        var e = undefined,
            eidx = -1,
            src = undefined,
            tgt = undefined,
            eid = undefined;

        if (arguments.length == 1) {
            e = this.link(arg0);
            eidx = this.linkIdx[arg0];
        }
        else if (arguments.length >= 2) {
            e = this.link(arg0, arg1);
            eidx = this.linkIdx[e.id];
        }

        src = e.source;
        tgt = e.target;

        this.invalidEdgeIndices.push(eidx);
        this.linkIdx[eid] = undefined;
        this.links[eidx] = undefined;
        //remove from adjacency list
        var s = this.adjlinks[this.nodeIdx[e.source]],
            t = this.adjlinks[this.nodeIdx[e.target]];

        s.splice(s.indexOf(e.id), 1);
        t.splice(t.indexOf(e.id), 1);

        return this;
    },

    node: function(nid) {
            
        return (this.nodeIdx[nid] == undefined || this.nodes[this.nodeIdx[nid]] ==  undefined) ? null: this.nodes[this.nodeIdx[nid]];
    },

    hasNode: function(nid) {
        return this.node(nid) !== null;
    },

    //overloaded function link
    link: function(arg0, arg1) {
        if (arguments.length == 1) {
            return (this.linkIdx[arg0] == undefined || this.links[this.linkIdx[arg0]] == undefined) ? null: this.links[this.linkIdx[arg0]];
        }
        else if (arguments.length == 2) { //nid0, nid1
            var nlinks = this.adjacents(arg0),
                rs = [];
            for (var i= 0, ii = nlinks.length; i < ii; i ++) {
                if (this.link(nlinks[i]) && (this.link(nlinks[i]).source == arg0 && this.link(nlinks[i]).target == arg1
                    || this.link(nlinks[i]).source == arg1 && this.link(nlinks[i]).target == arg0)) {
                    if(rs.indexOf(nlinks[i]) == -1)
                        rs.push(nlinks[i]);
                }
            }
            if (rs.length == 1) {
                return rs[0];
            }
            else if (rs.length == 0) {
                return null;
            }
            else {
                return rs;
            }
        }
        else
            return undefined;
    },

    hasLink: function(arg0, arg1) {
        var link = this.link(arg0, arg1);
        return link !== null && link !== undefined;
    },

    neighbor: function(nid, eid) {
        if (nid == this.link(eid).source)
            return this.link(eid).target;
        else
            return this.link(eid).source;
    },

    adjacents: function(nid) {
        return this.adjlinks[this.nodeIdx[nid]];
    },

    neighbors: function(nid) {

        var eids = this.adjacents(nid),
            nbrs = [];

        for (var i= 0, ii=eids.length; i < ii; i ++) {
            var nbr = this.neighbor(nid, eids[i]);
            if (nbrs.indexOf(nbr) == -1)
                nbrs.push(nbr);
        }

        return nbrs;
    },

    degree: function(nid, weight) {
        if (arguments.length == 1) {
            return this.adjacents(nid).length;
        }
        else {
            var adjlinks = this.adjacents(nid),
                wsum = 0;
            for (var i = 0, ii = adjlinks.length; i < ii; i++) {
                wsum += this.getLinkAttr('w', adjlinks[i]);
            }
            return wsum;
        }
    },

    precedessors: function(nid) { },
    successors: function (nid) { },

    indegree: function(nid) { },
    outdegree: function(nid) { },


    getNodes: function() {
        var nids = [],
            invalids = _.sortBy(this.invalidNodeIndices);
        for (var i = 0, ii = this.nodes.length, j = 0; i < ii; i ++) {
            if (j < invalids.length && i < invalids[j] || j >= invalids.length) {
                nids.push(this.nodes[i].id);
            }
            else {
                j ++;
            }
        }
        return nids;
    },

    getLinks: function() {
        var eids = [],
            invalids = _.sortBy(this.invalidEdgeIndices);
        for (var i = 0, ii = this.links.length, j = 0; i < ii; i ++) {
            if (j < invalids.length && i < invalids[j] || j >= invalids.length) {
                eids.push(this.links[i].id);
            }
            else {
                j ++;
            }
        }
        return eids;
    },

    getNodeAttr: function(attr, nid) {
        return this.node(nid).attrs[attr];
    },

    getNodeAttrs: function(attrs, nid) {
        var rs = {};
        for (var i= 0, ii=attrs.length; i < ii; i ++) {
            rs[attrs[i]] = this.getNodeAttr(attrs[i], nid);
        }
        return rs;
    },

    getLinkAttr: function(attr, eid) {
        return this.link(eid).attrs[attr];
    },

    hasNodeAttr: function(attr) {
        var nids = this.getNodes();
        if (nids.length == 0) {
            return false;
        }
        else {
            for (var i = 0; i < nids.length; i ++) {
                if (this.getNodeAttr(attr, nids[i]) != undefined) {
                    return true;
                }

            }
            return false;
        }
    },

    bfs: function(nid, dlimit) {

        var visited = d3.set([nid]),
            distances = d3.map(),
            queue = [nid];

        distances.set(nid, 0);

        while (queue.length > 0) {
            var n0 = queue.shift(),
                d = distances.get(n0);
            if (d >= dlimit)
                continue;
            var nbrs = this.neighbors(n0);
            for (var i=0, ii=nbrs.length; i<ii; i++) {
                if (!visited.has(nbrs[i])) {
                    queue.push(nbrs[i]);
                    visited.add(nbrs[i]);
                    distances.set(nbrs[i], d + 1);
                }
            }
        }

        return distances;
    },

    updateNodeAttrs: function(params, nid) {

        var n = this.node(nid);
        params = params || {};
        for (var k in params) {
            if (params.hasOwnProperty(k)) {
                switch (k) {
                    case 'id': break;
                    case 'name': n.name = params[k]; break;
                    default :n.attrs[k] = params[k]; break;
                }
            }
        }
    },

    updateLinkAttrs: function(params, eid) {

        var e = this.link(eid);
        params = params || {};
        for (var k in params) {
            if (params.hasOwnProperty(k)) {
                switch (k) {
                    case 'id': break;
                    case 'source': break;
                    case 'target': break;
                    default :e.attrs[k] = params[k]; break;
                }
            }
        }
    },

    //adjacency matrix based on the given order
    adjacencyMatrix: function(nids, weighted) {

        var mat = matrix.zeros(nids.length, nids.length);

        for (var i = 0, ii = nids.length; i < ii; i++) {
            for (var j = i + 1, jj = nids.length; j < jj; j++) {
                var e = this.link(nids[i], nids[j]);
                if (_.isArray(e)) {
                    if (weighted == undefined || weighted == false) {
                        mat[j][i] = mat[i][j] = e.length;
                    }
                    else {
                        var sum = 0;
                        for (var k = 0; k < e.length; k ++) {
                            sum += this.getLinkAttr('weight', e[k]);
                        }
                        mat[j][i] = mat[i][j] = sum;
                    }
                }
                else if (e != null){
                    if (weighted == undefined || weighted == false) {
                        mat[j][i] = mat[i][j] = 1;
                    }
                    else {
                        mat[j][i] = mat[i][j] = this.getLinkAttr('weight', e);
                    }
                }
                else { }
            }
        }

        return mat;
    },

    info: function() {
        return '#nodes = ' + this.nodes.length + '; ' + '#links = ' + this.links.length;
    }

});



//load json graph data exported by networkx
_.extend(Graph.prototype, {

    loadJSON: function(data) {

        for (var i = 0, ii = data.nodes.length; i < ii; i++) {
            this.addNode(data.nodes[i].id, data.nodes[i]);
        }

        for (var i = 0, ii = data.links.length; i < ii; i++) {
            this.addLink(i,
                data.nodes[data.links[i].source].id,
                data.nodes[data.links[i].target].id
            );
        }

    }

});


//utility functions for bipartite graphs
_.extend(Graph.prototype, {

    //TODO weighted projection DONE
    project: function(nodes, weighted) {

        var g = new Graph();
        var nbrs = {};

        for (var i = 0; i < nodes.length; i ++) {
            g.addNode(nodes[i]);
            nbrs[nodes[i]] = this.neighbors(nodes[i]);
        }

        for (var i = 0; i < nodes.length; i ++) {
            for (var j = 0; j < nodes.length; j ++) {
                var nbrIntersectionCnt = _.intersection(nbrs[nodes[i]], nbrs[nodes[j]]).length;
                // console.info(nbrIntersectionCnt);
                if (nbrIntersectionCnt > 0) {
                    g.addLink(i * nodes.length + j, nodes[i], nodes[j], {weight: nbrIntersectionCnt});
                }
            }
        }

        return g;
    }

});


_.extend(Graph.prototype, {

    test : function() {

        g_test = new Graph();
        g_test.addNode('a');
        g_test.addNode('b');
        g_test.addNode('c');
        g_test.addNode('d');
        g_test.addNode('e');

        g_test.addLink('ab', 'a', 'b');
        g_test.addLink('ac', 'a', 'c');
        g_test.addLink('ad', 'a', 'd');
        g_test.addLink('de', 'd', 'e');
        g_test.addLink('cb', 'c' ,'b');
        g_test.addLink('cc', 'c', 'c');

    }
});


_.extend(Graph.prototype, {

    //TODO MUST include weight in the adjacency matrix
    laplacianMatrix: function(nids, weighted) {

        var mat = this.adjacencyMatrix(nids, weighted),
            rowsum = [];

        for (var i = 0, ii = nids.length; i < ii; i++) {
            var sum = 0.0;
            for (var j = 0, jj = nids.length; j < jj; j ++) {
                sum += mat[i][j];
            }
            rowsum.push(sum);
        }

        for (var i = 0, ii = nids.length; i < ii; i++) {
            mat[i][i] = rowsum[i];
        }

        for (var i = 0, ii = nids.length; i < ii; i++) {
            for (var j = i, jj = nids.length; j < jj; j ++) {
                mat[i][j] = - mat[i][j];
                mat[j][i] = - mat[j][i];
            }
        }


        return mat;
    },

    fiedlerVector: function(weighted) {

        var nodes = this.getNodes();
        var lapMat = this.laplacianMatrix(nodes, weighted);
        var eigen = matrix.eigen(lapMat);

        var rs = {};
        for (var i = 0; i < nodes.length; i ++) {
            rs[nodes[i]] = eigen.V[eigen.IDX][i];
        }

        return rs;
    }
});


_.extend(Graph.prototype, {

        bundles: function(nids) {

        var mat = this.adjacencyMatrix(nids),
            bdls = [];

        //matrix
        for (var i = 0, ii = nids.length; i < ii; i++) {
            //fill in diagonal entries
            mat[i][i] = 1;
        }

        //detect rectangle areas and check for rectangles like in issue01.png
        while (!matrix.is_zero(mat)) {
            var rect = matrix.find_maximum_rectangle(mat);
            if (rect == null
                || (rect.height == 0 && rect.width == 0)
                || (rect.height == 1 && rect.width == 1))
                break;

            if (rect.height == 1 && rect.width > 1) {
                if (rect.i0 == rect.j0) {
                    rect.j0 += 1;
                    rect.width -= 1;
                }
                else {
                    if (rect.i0 == rect.j0 + rect.width - 1) {
                        rect.width -= 1;
                    }
                }
            }

            if (rect.width == 1 && rect.height > 1) {
                if (rect.i0 == rect.j0) {
                    rect.i0 += 1;
                    rect.height -= 1;
                }
                else {
                    if (rect.j0 == rect.i0 + rect.height - 1) {
                        rect.height -= 1;
                    }
                }
            }

            if (rect.height > rect.width) {
                bdls.push({
                    i0: rect.j0,
                    i1: rect.j0 + rect.width - 1,
                    j0: rect.i0,
                    j1: rect.i0 + rect.height - 1
                });
            }
            else {
                bdls.push({
                    i0: rect.i0,
                    i1: rect.i0 + rect.height - 1,
                    j0: rect.j0,
                    j1: rect.j0 + rect.width - 1
                });
            }

            matrix.clean_rectangle(rect.i0, rect.j0, rect.height, rect.width, mat);
            matrix.clean_rectangle(rect.j0, rect.i0, rect.width, rect.height, mat);
        }

        //check for size-one rectangles
        for (var i = 0, ii = nids.length; i < ii; i++) {
            for (var j = i, jj = nids.length; j < jj; j++) {
                if (mat[i][j] != 0 && i != j) {
                    bdls.push({
                        i0: i,
                        i1: i,
                        j0: j,
                        j1: j
                    });
                }
            }
        }

        return bdls;
    }

});
/**
 * Created by user on 9/5/14.
 */


var config = {

    x0: 300,
    y0: 160,

    width: 1000,
    height: 800,

    matrixCellSize: 12,
    
    matrixCellPadding: 0.5,
    matrixPadding: 3,

    forceSimulationTicks: 200,
    medianIterationRounds: 50,

    labelFontSize: 8,
    labelFontFamily: '"Century Gothic", CenturyGothic, AppleGothic, sans-serif',
    labelFontAscend: 0.75,
    labelFontDescend: -0.17,

    label0Shift: -100,
    label1Shift: -20



}

/**
 * Created by panpan on 9/5/14.
 */


CiteVis = function(graph, canvas, config) {


    this.dispatcher = new EventDispatcher(this);
    this.graph = graph;
    this.canvas = canvas.append('g')
        .attr('class', 'matrix')
        .attr('transform', geom.transform.begin()
            .translate(config.x0, config.y0)
            .end());
    this.config = config;

    this.confs = [];
    this.years = [];

    this.confs_coords = {};
    this.years_coords = {};

    this.counts = undefined;
    this.groups = undefined;

    this.infopanel = undefined;

};

_.extend(CiteVis.prototype, {

    init: function() {

        var self = this;

        this.confs = ['infovis', 'vast', 'vis'];
        // this.years = {
        //     'infovis': d3.range(1998, 2014),
        //     'vast': d3.range(2006, 2014),
        //     'vis': d3.range(1998, 2014)
        // };

        //years in inverse order
        this.years = {
            'infovis': d3.range(2013, 1994, -1),
            'vast': d3.range(2013, 2005, -1),
            'vis': d3.range(2013, 1989, -1)
        };        


        var eids = this.graph.getLinks(function(eid) {
            var sid = self.graph.link(eid)
                .source,
                tid = self.graph.link(eid)
                    .target;
            return self.graph.getNodeAttr('partition', sid) == 'paper' && self.graph.getNodeAttr('partition', tid) == 'paper';
        });

        var linkSignature = function(eid) {
            var sid = self.graph.link(eid)
                .source,
                tid = self.graph.link(eid)
                    .target;
            return self.graph.getNodeAttr('conf', tid) + '_' + self.graph.getNodeAttr('conf', sid) + '_' + self.graph.getNodeAttr('year', tid) + '_' + self.graph.getNodeAttr('year', sid);
        };

        this.counts = _.countBy(eids, linkSignature);
        this.groups = _.groupBy(eids, linkSignature);

        return this;
    },

    setInfoPanel: function(infopanel) {
        this.infopanel = infopanel;
        return this;
    },

    drawDetails: function(paperCnts) {
        
        var self = this;
        self.infopanel.selectAll('*').remove();

        var papers = _.keys(paperCnts).sort();

        var pdivs = self.infopanel.selectAll('.paper')
            .data(papers)
            .enter()
            .append('div')
            .attr('class', 'paper');
            
        pdivs.append('p')
            .text(function(p) {return paperCnts[p] + '--' + p});

    },

    highlightLabels: function(cc, c, yy, y) {

        var self = this;

        self.canvas.selectAll('.year_row_label')
            .classed('highlight', false)
            .filter(function(_y) {
                return _y == yy && d3.select(this.parentNode.parentNode).datum() == cc;
            })
            .classed('highlight', true);

        self.canvas.selectAll('.year_col_label')
            .classed('highlight', false)
            .filter(function(_y) {
                return _y == y && d3.select(this.parentNode.parentNode).datum() == c;
            })
            .classed('highlight', true);

        self.canvas.selectAll('.conf_row_label')
            .classed('highlight', false)
            .filter(function(_c) {return _c == cc;})
            .classed('highlight', true);

        self.canvas.selectAll('.conf_col_label')
            .classed('highlight', false)
            .filter(function(_c) {return _c == c;})
            .classed('highlight', true);
    },

    // cleanDetails: function() {

    //     this.infopanel.selectAll('*').remove();

    //     return this;
    // },

    layout: function() {
        //STUB
        return this;
    },

    draw: function() {

        var self = this;

        var matrixCellSize = self.config.matrixCellSize;

        var confs_coords = {},
            y = 0;

        for (var i = 0; i < self.confs.length; i ++) {
            confs_coords[self.confs[i]] = {'x': 0, 'y': y};
            y += matrixCellSize * self.years[self.confs[i]].length;
        }


        //draw citing papers and cited papers
        self.canvas.selectAll('.label0')
            .data(['cited', 'citing'])
            .enter()
            .append('text')
            .attr('class', 'label')
            .text(_.identity)
            .attr('text-anchor', 'end')
            .attr('x', function(l) {
                if (l == 'cited')  return self.config.label0Shift - 80;
                else return y / 2;
            })
            .attr('y', function(l) {
                if (l == 'cited')  return y / 2;
                else return -140;
            });


        var conf_rows = self.canvas.selectAll('.conf_row')
            .data(self.confs)
            .enter()
            .append('g')
            .attr('class', 'conf_row')
            .attr('transform', function(cc, ii) {
                return geom.transform.begin()
                    .translate(0, confs_coords[cc].y)
                    .end();
            });

        conf_rows
            .append('text')
            .attr('class', 'conf_row_label')
            .attr('x', self.config.label0Shift)
            .attr('y', function(cc) {
                return matrixCellSize * self.years[cc].length / 2;
            })
            .text(function(cc) {
                if (cc == 'vis') return 'scivis';
                else return cc;
            })
            .attr('text-anchor', 'end');



        conf_rows
            .each(function(cc, i) {

                var year_row = d3.select(this)
                    .selectAll('.year_row')
                    .data(self.years[cc])
                    .enter()
                    .append('g')
                    .attr('class', 'year_row')
                    .attr('transform', function(yy, j) {
                        return geom.transform.begin()
                            .translate(0, j * matrixCellSize)
                            .end();
                    });

                year_row
                    .append('text')
                    .attr('class', 'year_row_label')
                    .attr('x', self.config.label1Shift)
                    .attr('y', matrixCellSize)
                    .text(_.identity)
                    .attr('text-anchor', 'end');

            });


        //draw matrix cells
        d3.selectAll('.conf_row')
            .each(function(cc, ii) {

                d3.select(this)
                    .selectAll('.year_row')
                    .each(function(yy, jj) {

                        d3.select(this)
                            .selectAll('.conf_col')
                            .data(self.confs)
                            .enter()
                            .append('g')
                            .attr('class', 'conf_col')
                            .attr('transform', function(c, i) {
                                return geom.transform.begin()
                                    .translate(confs_coords[c].y, 0)
                                    .end();
                            })
                            .each(function(c, i) {

                                var cells = d3.select(this)
                                    .selectAll('.year_col')
                                    .data(self.years[c])
                                    .enter()
                                    .append('g')
                                    .attr('class', 'year_col')
                                    .attr('transform', function(y, j) {

                                        return geom.transform.begin()
                                            .translate(j * matrixCellSize, 0)
                                            .end();

                                    })
                                    .each(d3behaviour.highlight)
                                    // .on('mouseover', function(y, j) {
                                    // })
                                    .on('mouseover', function(y, j) {

                                        var key = cc + '_' + c + '_' + yy + '_' + y;
                                        
                                        self.highlightLabels(cc, c, yy, y);

                                        if (self.groups[key] == undefined) {
                                            return;
                                        } else {

                                            var eids = self.groups[key];
                                            var titles = _.map(eids, function(eid) {
                                                var tid = self.graph.link(eid)
                                                    .target;
                                                return self.graph.getNodeAttr('title', tid);
                                            }, null);

                                            self.drawDetails(_.countBy(titles, _.identity));

                                        }

                                    });


                                cells.append('rect')
                                    .attr('x', 0)
                                    .attr('y', 0)
                                    .attr('width', matrixCellSize)
                                    .attr('height', matrixCellSize);

                                cells.append('circle')
                                    .attr('cx', matrixCellSize / 2)
                                    .attr('cy', matrixCellSize / 2)
                                    .attr('r', function(y, j) {
                                        var key = cc + '_' + c + '_' + yy + '_' + y;
                                        if (self.counts[key] == undefined) {
                                            return 0;
                                        } else {
                                            return Math.log(self.counts[key]) / Math.log(2);
                                        }
                                    });

                            });
                    });
            });

        //draw column labels
        d3.select('.conf_row')
            .select('.year_row')
            .selectAll('.conf_col')
            .append('text')
            .attr('class', 'conf_col_label')
            .text(function(cc) {
                if (cc == 'vis') return 'scivis';
                else return cc;
            })
            .attr('text-anchor', 'middle')
            .attr('x', function(c, i) {return self.years[c].length * matrixCellSize / 2;})
            .attr('y', self.config.label0Shift)
            .each(function(c, i) {

                var years = d3.select(this.parentNode)
                    .selectAll('.year_col');

                years.append('text')
                    .attr('class', 'year_col_label')
                    .text(_.identity)
                    .attr('text-anchor', 'start')
                    .attr('y', self.config.label1Shift)
                    .attr('x', matrixCellSize)
                    .attr('transform', geom.transform.begin().rotate(-90.0, matrixCellSize, self.config.label1Shift).end());
            });


    }
});


var app = {};

app.path = 'data/vis_dataset_tripartite.json';

app.graph = new Graph();

app.config = config;



$(function() {

    app.canvas = d3.select('#demo')
    .append('svg')
    .attr('width', config.width)
    .attr('height', config.height);

    d3.json(app.path, function(data) {

        //load graph
        app.graph.loadJSON(data);

        app.vis = new CiteVis(app.graph, app.canvas, app.config);

        app.vis.init()
            .setInfoPanel(d3.select('#aux'))
            .layout()
            .draw();
            // .registerCallBack();

    })

})

