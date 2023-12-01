#  github-diagram-viewer

View your diagram files from GitHub.



## Usage

Open the following URL in your browser: `https://chenxiaoyao6228.github.io//github-diagram-viewer?` + the URL of your Plantuml file on GitHub. 

For example, to view the PlantUML file at `https://github.com/chenxiaoyao6228/cloudimg/blob/main/2023/_gragh/plantuml/DNS.puml`

the link should be like : https://chenxiaoyao6228.github.io/github-diagram-viewer?https://github.com/chenxiaoyao6228/cloudimg/blob/main/2023/_gragh/plantuml/DNS.puml


For anyone who wants to embed the file in your website, you can try it with the following code:

```html
<iframe width="100%" height="600" src="https://chenxiaoyao6228.github.io/github-diagram-viewer/?https://github.com/chenxiaoyao6228/cloudimg/blob/main/2023/_gragh/plantuml/DNS.puml" />
```

## Supported File Types

- PlantUML: `.puml`, `.plantuml`, `.iuml`, `.pu`

- Excalidraw: `.excalidraw`


## How it works

The logic is quite simple, Github provides a raw file link for each file, for example, the raw file link for this file is: https://raw.githubusercontent.com/chenxiaoyao6228/github-diagram-viewer/main/README.md, all you have to do it the fetch the raw file and render it with the corresponding renderer.