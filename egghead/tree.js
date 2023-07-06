// tree
function createNode(key) {
    const children = [];
    return {
        key,
        children,
        addChild(nodeKey) {
            const node = createNode(nodeKey);
            children.push(node);
            return node;
        }
    }
}

function createTree(rootKey) {
    const root = createNode(rootKey);

    return {
        root,
        print() {
            let result = '';

            function traverse(node, visitFn, depth) {
                visitFn(node, depth);

                if (node.children.length) {
                    node.children.forEach(child => {
                        traverse(child, visitFn, depth + 1);
                    })
                }
            }
        function addKeyToResult(node, depth) {
            result += 
            result.length === 0
            ? node.key : `\n${' '.repeat(depth * 2)}${node.key}`
        }

        traverse(root, addKeyToResult, 1);
            return result;

        }
    }
} 

const dom = createTree('html');
const head = dom.root.addChild('head');
const body = dom.root.addChild('body');
const title = head.addChild('title - blabla');
const header = body.addChild('header');
const main = body.addChild('main');
const footer = body.addChild('footer');
const h1 = header.addChild('h1 - Tree lesson');
const p = main.addChild('p - Learn');
const copyright = footer.addChild('Copyright = etc.');

console.log(dom.print());