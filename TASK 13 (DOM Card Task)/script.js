let users = [
  {
    fullName: "Alex Suprun",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    profession: "UI/UX Designer",
    description: "Alex is a creative UI/UX designer who loves building user-friendly interfaces with clean interactions.",
    tags: ["design", "ui/ux", "creative", "remote"]
  },
  {
    fullName: "Christina wocin",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    profession: "Tech Community Leader",
    description: "A passionate tech community builder supporting diversity and inclusion in tech.",
    tags: ["tech", "community", "speaker", "mentor"]
  },
  {
    fullName: "Michael Dam",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    profession: "Product Manager",
    description: "Michael drives product strategy and enjoys working closely with development teams to ship great features.",
    tags: ["product", "management", "strategy", "agile"]
  },
  {
    fullName: "Ayo Ogunseinde",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    profession: "Photographer",
    description: "Ayo captures stunning portraits and landscapes, blending light and emotion in every shot.",
    tags: ["photography", "travel", "creative", "visual"]
  },
  {
    fullName: "Jurica Koletić",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    profession: "Frontend Developer",
    description: "Jurica builds performant, modern front-end web apps with a focus on accessibility and animation.",
    tags: ["webdev", "javascript", "react", "css"]
  }
];

let sum = ''

users.forEach(function(val){

    sum += `<div id="card">
            <img src="${val.image}" alt="">
            <h3>${val.fullName}</h3>
            <h4>${val.profession}</h4>
            <p>${val.description}</p>
        </div>`
})

let main = document.querySelector('main');

main.innerHTML = sum