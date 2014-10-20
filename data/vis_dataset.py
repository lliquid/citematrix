import os
import re
import json
import networkx as nx

directory = 'vis_titles_authors_citations_90-13'

# parsed.append((fn, re.findall(r'title:([^\n]+)\nauthors:([^\n]+)\nabstract:([^\n]+)\nvis citations:([^\Z]+)\Z', filestr)))

fn_json = 'vis_dataset.json'

papers = dict()

for fn in os.listdir(directory):
    with open(os.path.join(directory, fn), 'r') as f:
        paper = dict()
        incitation = False
        for l in f:
            if l.startswith('title') or l.startswith('titel'):
                paper['title'] = l[6:].rstrip().lstrip()
                incitation = False
                continue
            if l.startswith('authors:') or l.startswith('autors') or l.startswith('auhors'):
                paper['authors'] = l[8:].rstrip().lstrip()
                continue
            if l.startswith('abstract:'):
                paper['abstract']  = l[9:].rstrip().lstrip()
                continue
            if l.startswith('vis citations:'):
                paper['vis_citations'] = []
                incitation = True
                continue
            if incitation:
                paper['vis_citations'].append(l.rstrip())
            else:
                paper['authors'] = ' '.join([paper['authors'], l.rstrip()])

        paper['authors'] =  [w.rstrip().lstrip() for w in paper['authors'].split(',')]

        raw_year =  int(fn.split('.')[0].split('_')[-1])
        paper['year'] = 2000 + raw_year if raw_year < 50 else 1900 + raw_year
        papers[fn.split('.')[0]] = paper
    
with open(fn_json, 'w') as f:
    json.dump(papers, f)






