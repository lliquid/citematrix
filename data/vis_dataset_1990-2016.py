import json
import networkx as nx
from networkx.readwrite.json_graph.node_link import node_link_data


fn = 'IEEE VIS papers 1990-2016 - Main dataset.tsv'

fn_json_graph = 'IEEE VIS papers 1990-2016 - Main dataset.json'


papers = {}


with open(fn, 'r') as f:
    f.readline()
    for l in f:
        conf, year, title = l.split('\t')[0:3]
        year = int(year)            
        pid, authors, citations = l.split('\t')[3].strip(), l.split('\t')[9], l.split('\t')[11]
        authors = [a.rstrip().lstrip() for a in authors.split(';')]
        citations = filter(lambda c: c!='', [w.strip() for w in citations.split(';')])
        conf.strip()
        if conf == 'Vis':
            conf = "SciVis"
        papers[pid] = {'title': title, 'id': pid, 'authors':authors, 'conf': conf, 'year': year, 'citations': citations}

g = nx.DiGraph()

for pid in papers:
    p = papers[pid]
    g.add_node(pid, conf=p['conf'], id=p['id'], partition='paper', year=p['year'], title=p['title'])
    for a in p['authors']:
        g.add_node(a, partition='author')


for pid in papers:
    p = papers[pid]
    for pcid in p['citations']:
        g.add_edge(pid, pcid)
    for a in p['authors']:
        g.add_edge(pid, a)

with open(fn_json_graph, 'w') as f:
    json.dump(node_link_data(g), f)

 






