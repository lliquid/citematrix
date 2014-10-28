import re
import json
from nltk.metrics import edit_distance
from logger import info


fn0 = 'IEEE VIS papers 1990-2013 - AllPapers+Abstracts+Authors.tsv'
fn1 = 'vis_dataset.json'

papers = {}

with open(fn0, 'r') as f:
    f.readline()
    for l in f:
        conf, year, title = l.split('\t')[1:4]
        isOther, filename = l.split('\t')[9], l.split('\t')[16]
        conf, year, title, isOther, filename = str(conf.lower()), int(year), str(title), len(isOther) > 0, filename.split('.')[0]
        if not isOther:
            papers[(conf, year)]
        if len(filename) < 4 and not isOther:
            print conf, year, title





