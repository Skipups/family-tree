class FamilyTree {
  constructor(value) {
    if (typeof value !== "string" || value === "undefined") throw error;
    this.value = value;
    this.children = [];
  }

  //`insert`: Inserts a child at this node.
  insert(name) {
    if (name === undefined) return;
    const child = new FamilyTree(name);
    //console.log("this", this);
    this.children.push(child);
    //console.log(this.children);
  }
  //`familySize`: Returns this size of **this parent and their children.**
  familySize() {
    if (this.children.length !== 0) {
      let childSize = this.children.length;
      //console.log("childSize", childSize.length);
      return 1 + childSize;
    }
    return 1;
  }
  //`findMember`: Given a `name`, it will return the `node` where that
  //member exists. Otherwise, returns undefined.
  findMember(name) {
    let match = undefined;
    let nameToFind = name;
    if ((this.value = name)) return this;
    for (let i = 0; i < this.children.length; i++) {
      let kid = this.children[i];
      console.log(kid.children);
      if (kid.value === nameToFind) match = kid;
      else {
        if (kid.children.length > 0) {
          match = kid.children.findMember(name);
        }
      }
    }
    return match;
  }
  //`log`: Logs out a specific structure (exampled below) of the family from this point down.
  log() {
    return `-- ${this.value}\n${this.children
      .map(child => {
        return `---- ${child.value}\n${child.children
          .map(grands => {
            return `------ ${grands.value}`;
          })
          .join("\n")}`;
      })
      .join("\n")}`;
  }
}

module.exports = FamilyTree;

// const szwajkowskis = new FamilyTree("Pop");

// szwajkowskis.insert("Mike");
// szwajkowskis.insert("Amy");
//szwajkowskis.insert("Todd");

//szwajkowskis.familySize();
