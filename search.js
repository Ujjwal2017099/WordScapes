
function find(maze, words) {
     for(let i=0;i<words.length;i++){
          // for(let j=0;j<words[i].length;j++){
               words[i] = words[i].toUpperCase();
          // }
     }
     words.forEach((e)=>{
          console.log(e);
     })
     // for(let i=0;i<maze.length;i++){
     //      console.log(maze[i]);
     // }
     let result = [];
     let root = buildTrie(words);
     for(let i=0;i<maze.length;i++){
          for(let j=0;j<maze[i].length;j++){
               let temp = [];
               dfs(root,i,j,result,temp,maze);
          }
     }
     if(result.length) console.log('found');
     else console.log('not found');
     return result;
}
function dfs(node,i,j,result,temp,maze){
     if(node.word){
          temp.forEach((e)=>{
               result.push(e);
          })
          while (temp.length) {
               temp.pop();
          }
          node.word = null;
          return ;
     }
     if(i<0 || j<0 || i>=maze.length || j>=maze[i].length) return;
     if(!node[maze[i][j]]) {

          return;
     }
     let c = maze[i][j];
     maze[i][j] = '$';
     let obj = [i,j];
     // let prev = temp.length;
     temp.push(obj);
     dfs(node[c],i+1,j,result,temp,maze);
     dfs(node[c],i-1,j,result,temp,maze);
     dfs(node[c],i,j+1,result,temp,maze);
     dfs(node[c],i,j-1,result,temp,maze);
     // if(temp.length == prev){
     //      temp.pop();
     // }
     maze[i][j] = c;
     if(temp.length) temp.pop();
}
const buildTrie = (words) => {
  const root = {};
  for (const w of words) {
    let node = root;
    for (const c of w) {
      if (node[c] == null) node[c] = {};
      node = node[c];
    }
    node.word = w;
  }
  return root;
};
module.exports = find;
