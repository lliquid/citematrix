import re
import json
from logger import info


fn = 'IEEE VIS papers 1990-2013 - AllPapers+Abstracts+Authors.tsv'
fndd = 'author-dupes-to-fix.txt'


with open(fn, r) as f:
    
 