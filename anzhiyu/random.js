var posts=["2024/10/15/hello-world/","2024/05/19/LLVM-NEW-PASS-ALL-IN-ONE/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };