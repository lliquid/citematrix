import json
import networkx as nx
from networkx.readwrite.json_graph.node_link import node_link_data

fn_in = 'IEEE VIS papers 1990-2014 - Main dataset.tsv'
fn_out = 'IEEE VIS papers 1990-2014 - citation_column.tsv'

pnameToId = dict()
citationsData = dict()
pids14 = []

with open(fn_in, 'r') as f:
    f.readline()
    for l in f:
        if l.split('\t')[9] == 'M':
            continue
        else:
            year = int(l.split('\t')[1])
            xid, citations = l.split('\t')[7].rstrip().rstrip(), l.split('\t')[17]
            pname = l.split('\t')[16].rstrip().rstrip()
            pnameToId[pname] = xid
            if year == 2014:
                pids14.append(xid)
                citationsData[xid] = filter(lambda c:len(c)>0, [w.rstrip().rstrip() for w in citations.split(',')])


with open(fn_out, 'w') as f:
    for xid in pids14:
        f.write(';'.join(map(lambda c:pnameToId[c], citationsData[xid])) + '\n')





# print citationsData
            # print xid, pname
            # print citations
            # print l.split('\t')[16]





