import json
import networkx as nx
from networkx.readwrite import json_graph
import itertools


fn_json_graph = 'vis_graph.json'
fn_citevis2 = "citations-all-conf.json"

with open(fn_json_graph, 'r') as f:
    g = json_graph.node_link_graph(json.load(f))
    papers = filter(lambda n: g.node[n]['partition'] == 'paper', g.nodes())
    # print papers
    # authors = filter(lambda n: g.node[n]['partition'] == 'author', g.nodes())
    # print authors
    # for p in papers:
    	# print g.neighbors(p)
    # print papers

    # authors = []
    # for n in g.nodes():
    # 	if 'partition' in g.node[n] and g.node[n]['partition'] == 'author':
    # 		authors.append(n)
    # for p in authors:
    # 	print g.neighbors(p)

    data = []
    papers.sort(key=lambda n:g.node[n]['year'])
    for k , v in itertools.groupby(papers, lambda n:g.node[n]['year']):
    	data.append({'year': k, 'papers': list(v)})
    for d in data:
    	papers = d['papers']
    	papers.sort(key=lambda n:g.node[n]['conf'])
    	d['papers'] = []
    	for k , v in itertools.groupby(papers, lambda n:g.node[n]['conf']):
    		d['papers'].append({'conference': k, 'papers': list(v)})
    	for dd in d['papers']:
    		papers = dd['papers']
    		dd['papers'] = []
    		for n in papers:
    			authors = filter(lambda nbr:g.node[nbr]['partition'] == 'author', g.neighbors(n))
    			citations = filter(lambda nbr:g.node[nbr]['partition'] == 'paper', g.neighbors(n))
    			citations = [{"id": nbr, "loc": ""} for nbr in citations]
    			keywordstr = ''.join(g.node[n]['title'].split(' ')).lower()
    			dd['papers'].append({
    				'conference': g.node[n]['conf'],
    				'doi': '',
    				'gid': '',
    				'gscholar': '',
    				'id': n,
    				'title': g.node[n]['title'],
    				'year': g.node[n]['year'],
    				'concepts': [],
    				'authors': authors,
    				'keywordstr': keywordstr,
    				'citations': citations})

    with open(fn_citevis2, 'w') as f:
		json.dump(data, f)

    # data = [{'year': y, 'papers': []} for y in list(set([g.node[n]['year'] for n in papers]))]






 



