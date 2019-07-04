var homePage = window.location.origin,
    numPosts = 10,
    perPage = 6;

function recentPosts(e) {
    if (document.getElementById("recent-posts")) {
        for (var t, s = e.feed.entry, n = "", r = document.getElementById("recent-posts"), a = 0; a < numPosts; a++) {
            for (var o = 0; o < numPosts; o++)
                if ("alternate" == s[a].link[o].rel) {
                    t = s[a].link[o].href;
                    break
                }
            "media$thumbnail" in s[a] ? u = s[a].media$thumbnail.url.replace(/.*?:\/\//g, "//")
                .replace(/\/s[0-9]+\-c/g, "/s90") : u =
                "https://3.bp.blogspot.com/-UJjzG6OrNL8/WYGZV4jLz7I/AAAAAAAAAXo/Ufj1ftjkBkgqig9v7VcBOnz9a96jnHt9QCLcBGAs/s1600/noimage.png";
            var i = s[a].title.$t;
            n += '<li class="recent-posts"><img src="' + u + '" alt="' + i + '"><div class="title_post"><a href="' + t +
                '" title="' + i + '" target="_blank">' + i + "</a></div></li>"
        }
        r.innerHTML = n
    }
}
var rcp = document.createElement("script");
rcp.src = homePage + "/feeds/posts/summary?alt=json-in-script&orderby=published&max-results=" + numPosts +
    "&callback=recentPosts", document.getElementsByTagName("head")[0].appendChild(rcp);
