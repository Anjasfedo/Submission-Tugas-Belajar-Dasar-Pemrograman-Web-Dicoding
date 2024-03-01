document.addEventListener("DOMContentLoaded", function () {
  const contentDiv = document.getElementById("content");
  const articles = [
    {
      title: "Article 1",
      imageUrl: "./assets/img-blank.PNG",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nihil iste veniam magnam consequuntur enim nesciunt aut ipsum quaerat. Nisi corporis eaque possimus ullam aperiam! Suscipit obcaecati perspiciatis ea? Laboriosam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet esse repellendus exercitationem quasi enim, quos, saepe iure pariatur illum rerum sapiente, animi sint autem asperiores quibusdam magni aspernatur repudiandae. Quasi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus unde error blanditiis at vitae laborum maxime dolor corrupti modi nemo explicabo dicta rem, neque alias sit quas odit voluptas saepe. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex mollitia necessitatibus vero reiciendis molestias. Ea dolorem nesciunt voluptates fuga veritatis obcaecati odit vero totam, ipsa cupiditate, a laboriosam similique iusto!",
    },
    {
      title: "Article 2",
      imageUrl: "./assets/img-blank.PNG",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nihil iste veniam magnam consequuntur enim nesciunt aut ipsum quaerat. Nisi corporis eaque possimus ullam aperiam! Suscipit obcaecati perspiciatis ea? Laboriosam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet esse repellendus exercitationem quasi enim, quos, saepe iure pariatur illum rerum sapiente, animi sint autem asperiores quibusdam magni aspernatur repudiandae. Quasi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus unde error blanditiis at vitae laborum maxime dolor corrupti modi nemo explicabo dicta rem, neque alias sit quas odit voluptas saepe. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex mollitia necessitatibus vero reiciendis molestias. Ea dolorem nesciunt voluptates fuga veritatis obcaecati odit vero totam, ipsa cupiditate, a laboriosam similique iusto!",
    },
    {
      title: "Article 3",
      imageUrl: "./assets/img-blank.PNG",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nihil iste veniam magnam consequuntur enim nesciunt aut ipsum quaerat. Nisi corporis eaque possimus ullam aperiam! Suscipit obcaecati perspiciatis ea? Laboriosam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet esse repellendus exercitationem quasi enim, quos, saepe iure pariatur illum rerum sapiente, animi sint autem asperiores quibusdam magni aspernatur repudiandae. Quasi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus unde error blanditiis at vitae laborum maxime dolor corrupti modi nemo explicabo dicta rem, neque alias sit quas odit voluptas saepe. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex mollitia necessitatibus vero reiciendis molestias. Ea dolorem nesciunt voluptates fuga veritatis obcaecati odit vero totam, ipsa cupiditate, a laboriosam similique iusto!",
    },
    {
      title: "Article 4",
      imageUrl: "./assets/img-blank.PNG",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nihil iste veniam magnam consequuntur enim nesciunt aut ipsum quaerat. Nisi corporis eaque possimus ullam aperiam! Suscipit obcaecati perspiciatis ea? Laboriosam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet esse repellendus exercitationem quasi enim, quos, saepe iure pariatur illum rerum sapiente, animi sint autem asperiores quibusdam magni aspernatur repudiandae. Quasi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus unde error blanditiis at vitae laborum maxime dolor corrupti modi nemo explicabo dicta rem, neque alias sit quas odit voluptas saepe. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex mollitia necessitatibus vero reiciendis molestias. Ea dolorem nesciunt voluptates fuga veritatis obcaecati odit vero totam, ipsa cupiditate, a laboriosam similique iusto!",
    },
  ];

  articles.forEach(function (article) {
    const articleElement = document.createElement("article");
    const articleTitle = document.createElement("h1");
    const articleImage = document.createElement("img");
    const articleText = document.createElement("p");

    articleTitle.classList.add("title");
    articleTitle.textContent = article.title;

    articleImage.classList.add("article-img");
    articleImage.src = article.imageUrl;
    articleImage.alt = "Article Image";

    articleText.classList.add("article-text");
    articleText.textContent = article.text;

    const articleTitleDiv = document.createElement("div");
    articleTitleDiv.classList.add("article-title");
    articleTitleDiv.appendChild(articleTitle);
    articleTitleDiv.appendChild(articleImage);

    articleElement.appendChild(articleTitleDiv);
    articleElement.appendChild(articleText);

    contentDiv.appendChild(articleElement);
  });
});
