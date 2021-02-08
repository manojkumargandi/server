
const structure = {
    type: "dir",
    children: {
        home: {
            type: "dir",
            children: {
                myname: {
                    type: "dir",
                    children: {
                        "filea.txt": {
                            type: "file",
                        },
                        "fileb.txt": {
                            type: "file",
                        },
                        "projects": {
                            type: "dir",
                            children: {
                                mysupersecretproject: {
                                    type: "dir",
                                    children: {
                                        mysupersecretfile: {
                                            type: "file",
                                        },
                                    },
                                }
                            },
                        },
                    }
                },
            },
        }
    },
};


exports.homefunction = (req, res) => {

    res.send('Welcome to the server');
}

exports.getContents = (req, res) => {   

    let path = req.params['0'];

    let list = path.split('/');

    let content = [];

    let children = structure;

    let index;

    for (index in list) {
        children = children.children[list[index]];
    }

    if(children.type === 'file') {
        content.push({
            fileName: list[index]
        })
    } else {

        for (let key of Object.keys(children.children)) {
            content.push({
                name: key,
                type: children.children[key].type
            })
        }

    }

    res.send(content);
}

exports.getmainContent = (req, res) => {
    
    let content = [];

    for (let key of Object.keys(structure.children)) {
        content.push({
            name: key,
            type: structure.children[key].type
        })
    }

    res.send(content);
}