import json
import networkx as nx
from networkx.readwrite.json_graph.node_link import node_link_data


fn = 'IEEE VIS papers 1990-2013 - AllPapers+Abstracts+Authors.tsv'

fn_json_graph = 'vis_graph.json'

# {
#         "partition": "paper",
#         "year": 1990,
#         "id": "gershon_vis_90",
#         "conf": "vis",
#         "title": "Visualization and Three-Dimensional Image Processing of Positron Emission Tomography (PET) Brain Images"
#     }, {
#         "partition": "author",
#         "id": "Neeraj Krishnan"
#     }

papers = {}

with open(fn, 'r') as f:
    f.readline()
    for l in f:
        if len(l.split('\t')[9]) > 0:
            continue
        else:
            conf, year, title = l.split('\t')[1:4]
            pid, authors, citations = l.split('\t')[8], l.split('\t')[16].split(';'), l.split('\t')[18].split(';')
            year = int(year)
            citations = [w.rstrip() for w in citations]
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
        g.add_edge(pid, pcid)
    for a in p['authors']:
        g.add_edge(a, pid.rstrip().lstrip())


with open(fn_json_graph, 'w') as f:
    json.dump(node_link_data(g), f)

 
# vast_papers = filter(lambda p: papers[p]['conf'] == 'vast', papers.keys())
# infovis_papers = filter( lambda p: papers[p]['conf'] == 'infovis', papers.keys())
# vis_papers = filter(lambda p: papers[p]['conf'] == 'vis', papers.keys())

# print 'vast -------------------------------------------------------'

# print 'max: ' + str(max([papers[p]['year'] for p in vast_papers]))
# print 'min: ' + str(min([papers[p]['year'] for p in vast_papers]))


# print 'infovis -------------------------------------------------------'

# print 'max: ' + str(max([papers[p]['year'] for p in infovis_papers]))
# print 'min: ' + str(min([papers[p]['year'] for p in infovis_papers]))

# print 'vis -------------------------------------------------------'

# print 'max: ' + str(max([papers[p]['year'] for p in vis_papers]))
# print 'min: ' + str(min([papers[p]['year'] for p in vis_papers]))








