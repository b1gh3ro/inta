import React from 'react'
import Avatar from '@material-ui/core/Avatar';
function Postspo(props) {
    return (
        <div className="post">
            <div className="d-flex p-2 align-items-center">
            <Avatar src="https://images.freeimages.com/images/large-previews/24e/halloween-1563652.jpg"/>
           <h3 className="p-2">{props.username}</h3>
           </div>
            <img  src={props.imgURL} alt="" />
            <h5 className="m-3"><strong>{props.username}:</strong> {props.captions}</h5>
        </div>
        
    )
}
Postspo.defaultProps={
    username: "⚠️ error",
    captions: "",
    imgURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAaVBMVEX////MAADJAADZVVXXTU321tbZXV3vvr7zzMzyxsbooqL22tr76+vSMTHednb88fHWWFjhgIDabGzSKCjqqqreenr44uLkkZHmmprrrq7OCQnUPz/aY2PooKD55eXttrbQJCTXSEjVPj6HQamOAAAEo0lEQVR4nO2d63LiMAxGsQspCWRbSLi3tOz7P+SGtOwCXUSw5EiB7/xsZ5jojGNH8q3XAwAAAAAAAAAAAADgJuZpNpn2C+d8jXNFfzrJ0rn2c2kzKmfFt5FT6j8Ws3Kk/YRKzMvE/bRy7sgl5cM1odGiuCbmn6Bi8UANaLzMm5o5+MmXY+2nboVhcpuZg59kqP3k0VkVAWa+/RQr7aePSuaC1dR6XKYdQTRWa5aaWs/6PltPmrPV1HryVDsSccaJiJpaT3JnI1cmpqbWc09dz3Yj6qays9lqxyRFKaym1lNqRyXDWwQ3lZ037bgEmH9GcVPZ+ex8Rvocx8wXz9rR8VhGajZf+KV2fBx+RXVT2fmlHWE4cbriEzud7ZZfo7up7LxqRxnGUwtuKjtP2nGGIJdMXbGTaEd6O/H7m792OtfvzFpzU9mZaUd7G+8tuqnsvGvHewtpq24qOx0qgG3bVbOnOyWMvH05uXbMTZm2/FLt8VPtqJvxoeCmsvOhHXcTXlTcVHZetCNvwJOOG+c6kEfovFR77L9YL1pq9lh/sULLW/6EwN8wXvoaBMa1Gw2OGG0C7Qy04yfph0V13pmG/kxfJ+pmBOdUQnJM51jBeYOQHMtZxHPwMC4lx9udygpPOKXk2G06w/DvPzE53uqyytfgkOTkOKNTNXNG4iAnx9tcXjCxIWeiE/0V1uERCcpxa53oacLHcVk5JkfzhBGQpBxncAaUV6uQlGOwcsErcknKMVj0euPEI9ty7M2ds8KRleN0DFyGkTqIyzGXQiwsyVnoOLjIjhWO8Gu103FwEeaEjKwcr+PgEqGF9UhybBXaV7bk2NrOx13lJizH1jo4ZjTCcoxN0TCDkZZj6jOQvexEWI6p5SjcwUpcjqXhilXoiiHHUsGLO5KLy7E0ljMzK3k5lrIr9qYzaTmWVurwKl3yckzVu1jF9RhyLBXZGRPBceRYmhSGHALIIYAcAsghwGhFgO8cAnwhEyC3ImBn5bvB8IjBb64cS1k5u54jsjHk6Ncs1XPYlUBhTFUCtbYuXsJUDZk9+yCNto8T2B8mstiat2rzXI/rGJvxZI/lopgaya0NV6YGqx57fY4sxtbn9HbaQo6xtrKLnV0JYiqz2sNcTSqKudWkpj4DtV38gFnvkkw8LVW6vuDtfdgM0yOGrJKFwb0P2DVDgf1WBNipR4E9ngTYHUyAfeUUOJGAAGdZUOAUFAKcn0OBk5cIcGYXBU57I8A5gRQ4YZIAZ5NS4FRbCpyHTICTtClwBjsFTu+nwL0PBLgxhAJ3zVDgliIK3G9FgZvRKHCnHgVuY6TAPZ4UuAGWAncHU+DWaQrcV06Bm+5J4nTLXe6Kjykj2PGldlRSbDfCevymQyWKq2SidnymHY8sY7lUyydj7WjESXMRPT7vVGGrMas1f8P42tYmPEkyx9Lj3Z11NmesimA9vrjfVnNgmISsovA+MbsUUpTxMr/Nj/f58v5GqIuMFkVTP94Xi5H287bNvEzcNUHV/5PyHvLLEEblrPjvUq76j8WsfLgmc848zSbTfnFY+uZc0Z9OsvRRGwwAAAAAAAAAAAAACOYP5wlZOMNJrssAAAAASUVORK5CYII="
}

export default Postspo
