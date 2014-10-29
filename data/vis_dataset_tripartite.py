import json
import networkx as nx
from networkx.readwrite.json_graph.node_link import node_link_data


fn_json = 'vis_dataset.json'
fn_tripartite_json = 'vis_dataset_tripartite.json'


papers = None

with open(fn_json, 'r') as f:
    papers = json.load(f)

g = nx.DiGraph()

for p in papers:
    conf = p.split('_')[1]
    print conf + '\t\t' + p
    papers[p]['conf'] = conf
    g.add_node(p, conf=conf, year=papers[p]['year'], title=papers[p]['title'], partition='paper')
    for a in papers[p]['authors']:
        g.add_node(a, partition='author')

for p in papers:
    for pc in papers[p]['vis_citations']:
        g.add_edge(p, pc)
    for a in papers[p]['authors']:
        g.add_edge(a, p)


with open(fn_tripartite_json, 'w') as f:
    json.dump(node_link_data(g), f)

 
vast_papers = filter(lambda p: papers[p]['conf'] == 'vast', papers.keys())
infovis_papers = filter( lambda p: papers[p]['conf'] == 'infovis', papers.keys())
vis_papers = filter(lambda p: papers[p]['conf'] == 'vis', papers.keys())

print 'vast -------------------------------------------------------'

print 'max: ' + str(max([papers[p]['year'] for p in vast_papers]))
print 'min: ' + str(min([papers[p]['year'] for p in vast_papers]))


print 'infovis -------------------------------------------------------'

print 'max: ' + str(max([papers[p]['year'] for p in infovis_papers]))
print 'min: ' + str(min([papers[p]['year'] for p in infovis_papers]))

print 'vis -------------------------------------------------------'

print 'max: ' + str(max([papers[p]['year'] for p in vis_papers]))
print 'min: ' + str(min([papers[p]['year'] for p in vis_papers]))








