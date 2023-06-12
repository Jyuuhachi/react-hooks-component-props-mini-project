import React from "react";
import Article from "./Article"
function ArticleList ({posts}) {
    const articleList = posts.map(Article)
    console.log(posts)
    return(
        <main>
         {articleList}
         </main>
    );
}
export default ArticleList;