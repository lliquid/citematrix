import re
import json
from logger import info


fn = 'IEEE VIS papers 1990-2013 - AllPapers+Abstracts+Authors.tsv'
fndd = 'author-dupes-to-fix.txt'


dd = dict()

with open(fndd, 'r') as f:
    for l in f:
        name0, name1 = l.split('<-')
        name0 = name0.rstrip().lstrip()
        name1 = name1.rstrip().lstrip()
        dd[name1] = name0

column = ['deduped author names']

with open(fn, 'r') as f:
    f.readline()
    for l in f:
        authors = l.split('\t')[11].split(';')
        for i, author in enumerate(authors):
            author = author.lstrip().rstrip()
            if author in dd:
                authors[i] = dd[author]
        column.append(';'.join(authors))













 