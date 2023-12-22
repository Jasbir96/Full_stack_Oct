/****
 * Steps
 * 1. add listener to nested comemtn component
 * 
 * **/


const commentComp = document.querySelector(".nested_comment");


const commentComponentHandler = function (e) {
    const identifierClass = e.target.getAttribute("class");
    if (identifierClass == "reply") {
        createReplyInput(e.target);
    }
    else if (identifierClass == "btn-submit") {
        createComment(e.target);
    }
}

const createReplyInput = function (sibling) {
    // innnerHTML -> parsing is involved  -> slower
    // < !-- < div class="nested_comments-reply--container" >
    //     <input type="text" placeholder="write your comment">
    //         <button class="btn-submit">submit</button>
    //     </> -->
    const replyContainer = document.createElement("div");
    const input = document.createElement("input");
    const button = document.createElement("button");

    replyContainer.setAttribute("class", "nested_comments-reply--container");
    input.setAttribute("placeholder", "write your comment");
    input.setAttribute("type", "text");
    button.setAttribute("class", "btn-submit");
    button.innerText = "Submit";

    replyContainer.appendChild(input);
    replyContainer.appendChild(button);

    sibling.parentNode.appendChild(replyContainer);



}

const createComment = function (submitBtn) {
    //reaching input and getting value
    const input = submitBtn.parentNode.children[0];
    if (input.value == "") {
        alert("reply can't be empty ")
        return
    }
    const commentText = input.value;
    // create a comment box 
    const nestedCommentCard = document.createElement("div");
    nestedCommentCard.setAttribute("class", "nested_comment--card");
    nestedCommentCard.innerHTML = `
                <h3 class="comment_text">${commentText} </h3>
                <div class="reply">Reply</div>
            `
    // travel and go to parent 
    const nestedCommentReplyContainer = input.parentNode;
    const parentComment = nestedCommentReplyContainer.parentNode;

    // replace -> input with the parent
    parentComment.replaceChild(nestedCommentCard, nestedCommentReplyContainer)








}

commentComp.addEventListener("click", commentComponentHandler)