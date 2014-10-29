import re
import json
from nltk.metrics import edit_distance
from logger import info


fn0 = 'IEEE VIS papers 1990-2013 - AllPapers+Abstracts+Authors.tsv'
fn1 = 'vis_dataset.json'
fncitecol = 'citation_xplore_column.txt'



xploreNum = dict()

with open(fn0, 'r') as f:
    f.readline()
    for l in f:
        isOther = len(l.split('\t')[9]) > 0 
        if not isOther:
            filename = l.split('\t')[17].rstrip()
            xplore_number = l.split('\t')[8]
            xploreNum[filename] = xplore_number

papers_cite = None
with open(fn1, 'r') as f:
    papers_cite = json.load(f)


column = []
with open(fn0, 'r') as f:
    f.readline()
    for l in f:
        isOther, filename = len(l.split('\t')[9]) > 0, l.split('\t')[17].rstrip()
        if not isOther:
            citing = papers_cite[filename]['vis_citations']
            citingx = []
            for pid in citing:
                if pid not in xploreNum:
                    print 'error : ' + pid
                else:
                    citingx.append(xploreNum[pid])
            column.append(';'.join(citingx))
        else:
            column.append('')



with open(fncitecol, 'w') as f:
    for r in column:
        f.write(r + '\n')



