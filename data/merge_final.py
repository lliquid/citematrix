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
        conf, year, title = str(conf.lower()), int(year), str(title)
        if (conf, year) not in papers:
            papers[(conf, year)] = []
        papers[(conf, year)].append(title)


papers2 = None
with open(fn1, 'r') as f:
    papers2 = json.load(f)

print str(len(papers2.keys())) + ' papers'


info('started')

cnt_unmatched = 0

matched = {}

i = 0
for k in papers2:
    year2, title2 = papers2[k]['year'], papers2[k]['title']
    conf2 = k.split('_')[-2]
    conf2 = str('scivis' if conf2 == 'vis' else conf2)
    title2 = str(title2)
    if i % 10 == 0:
        print str(i) + ' papers checked'
    cnt = 0
    title0 = None
    for title in papers[(conf2, year2)]:
        title0 = title
        title, title2 = title.lower(), title2.lower()
        title2 = title2[11:] if title2.startswith('case study') else title2
        title2 = title2[15:] if title2.startswith('research report') else title2
        title = title[11:] if title.startswith('case study') else title
        title = title[15:] if title.startswith('research report') else title        
        if edit_distance(title, title2) < 12:
            cnt += 1
            break
    if cnt != 1:
        print str(cnt) + '\t' + title2 + '\t' + k
    else:
        matched[title0] = k
    i +=1


