import json
import networkx as nx
from networkx.readwrite.json_graph.node_link import node_link_data


fn = 'IEEE VIS papers 1990-2014 - Main dataset.tsv'

fn_json_graph = 'vis_graph.json'


papers = {}
pnameToId = dict()


with open(fn, 'r') as f:
    f.readline()
    for l in f:
        if len(l.split('\t')[9]) > 0:
            continue
        else:
            conf, year, title = l.split('\t')[1:4]
            year = int(year)            
            pid, authors, citations = l.split('\t')[8], l.split('\t')[16].split(';'), l.split('\t')[18]
            pid = pid.rstrip().lstrip()
            authors = [a.rstrip().lstrip() for a in authors]
            pname = l.split('\t')[17]
            if pid != '':
                pnameToId[pname] = pid
            if year == 2014:
                citations = [w.rstrip() for w in citations.split(',')]
            else:   
                citations = [w.rstrip() for w in citations.split(';')]
            if pid == '':
                pid = pname
            citations = filter(lambda c: c!='', [w.rstrip() for w in citations])
            papers[pid] = {'title': title, 'id': pid, 'authors':authors, 'conf': conf, 'year': year, 'citations': citations}
g = nx.DiGraph()

for pid in papers:
    p = papers[pid]
    g.add_node(pid, conf=p['conf'], id=p['id'], partition='paper', year=p['year'], title=p['title'])
    for a in p['authors']:
        g.add_node(a.rstrip().lstrip(), partition='author')


for pid in papers:
    p = papers[pid]
    for pcid in p['citations']:
        if pcid in pnameToId:
            g.add_edge(pid, pnameToId[pcid])
        else:
            g.add_edge(pid, pcid)
    for a in p['authors']:
        g.add_edge(pid, a)

with open(fn_json_graph, 'w') as f:
    json.dump(node_link_data(g), f)

 






