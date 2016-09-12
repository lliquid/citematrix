import json
from networkx.readwrite import json_graph

def main():
	with open('vis_graph_add_2015.json', 'r') as f:
		g = json_graph.node_link_graph(json.load(f))
		print g.nodes()
	pass


if __name__ == '__main__':
	main()