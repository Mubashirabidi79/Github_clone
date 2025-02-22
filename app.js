const div = document.querySelector('.container')
const form = document.querySelector('.form')
const input = document.querySelector('.input_box')


form.addEventListener("submit", (event)=>{
  event.preventDefault()  
  axios(`https://api.github.com/users/${input.value}`)
  .then((res)=>{
      console.log(res.data);
      div.innerHTML = `
      <div class="card">
      <img src="${res.data.avatar_url}" alt="Avatar" class="avatar">
      <h2>${res.data.name || res.data.login}</h2>
      <p>${res.data.bio || "No bio available"}</p>
      <div class="stats">
          <div><strong>${res.data.followers}</strong><br>Followers</div>
          <div><strong>${res.data.following}</strong><br>Following</div>
          <div><strong>${res.data.public_repos}</strong><br>Repos</div>
      </div>
      <a href="${res.data.html_url}" target="_blank" class="profile-link">View Profile</a>
      </div>
`

      return res.data
  })
  .catch((err)=>{
    console.log('no profile found');
    return err
  })
})
