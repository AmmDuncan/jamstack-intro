const listRepos = async (username) => {
  const repos = await fetch(
    "https://api.github.com/users/" +
      username +
      "/repos?type=owner&sort=updated"
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  const markup = repos
    .map(
      (repo) => `<li>
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        (⭐️ ${repo.stargazers_count})
      </li>`
    )
    .join("");

  const content = document.querySelector("#content");
  content.innerHTML = markup;
};

listRepos("ammduncan");
