import json


def main():
	data = None
	with open('vis_graph.json', 'r') as f:
		graph = json_graph.node_link_graph(json.load(f))
	with open('IEEE VIS papers 1990-2015 - Main dataset.tsv', 'r') as f:
		f.readline()
		for l in f:
			strs = l.split('\t')
			year = int(strs[1])
			if year == 2015:
				conf = strs[0]
				title = strs[2]
				id = strs[7]
				authors = [a.decode('latin1') for a in strs[15].split(';')]
				citations = strs[16].split(';')
				# print conf, title, id, authors, citations
				for a in authors:
					if not graph.has_node(a):
						# print a
						graph.add_node(a, partition='author')
						# print '-' , a
					graph.add_edge(id, a)
				graph.add_node(id, conf=conf, title=title, year=year, partition='paper')
				for c in citations:
					graph.add_edge(id, c)
		print 'end'
	with open('vis_graph_add_2015.json', 'w') as f:
		json.dump(json_graph.node_link_data(graph), f)


if __name__ == '__main__':
	main()


