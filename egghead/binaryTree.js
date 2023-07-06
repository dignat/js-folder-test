// binary tree

function createBinaryNode(nodeKey) {
    return {
        nodeKey,
        left:null,
        right: null,
        addLeftNode(key) {
            const leftNode = createBinaryNode(key);
            this.left = leftNode;
            return leftNode;
        },
        addRightNode(key) {
            const rightNode = createBinaryNode(key);
            this.right = rightNode;
            return rightNode;
        }
    }
}

const TRAVESARLS = {
    IN_ORDER: (node, visitFn) => {
        if (node !== null) {
            TRAVESARLS.IN_ORDER(node.left, visitFn);
            visitFn(node);
            TRAVESARLS.IN_ORDER(node.right, visitFn);
        }
    },
    PRE_ORDER: (node, visitFn) => {
        if (node !== null) {
            visitFn(node);
            TRAVESARLS.PRE_ORDER(node.left, visitFn);
            TRAVESARLS.PRE_ORDER(node.right, visitFn);
        }
    },
    POST_ORDER: (node, visitFn) => {
        if (node !== null) {
            TRAVESARLS.POST_ORDER(node.left, visitFn);
            TRAVESARLS.POST_ORDER(node.right, visitFn);
            visitFn(node);
        }
    }
}

function createBinaryTree(rootKey) {
    const root = createBinaryNode(rootKey);
    return {
        root,
        print(traversalType = 'IN_ORDER') {
            let result = '';

            const visit = node => {
                result += result.length === 0
                ? node.nodeKey : ` => ${node.nodeKey}`
            }
            TRAVESARLS[traversalType](root, visit);

            return result;
        }
    }
}

const tree = createBinaryTree('a');
const b = tree.root.addLeftNode('b');
const c = tree.root.addRightNode('c');
const d = b.addLeftNode('d');
const e = b.addRightNode('e');
const f = c.addLeftNode('f');
const g = c.addRightNode('g');
const h = d.addLeftNode('h');
const i = d.addRightNode('i');

console.log(tree.print())