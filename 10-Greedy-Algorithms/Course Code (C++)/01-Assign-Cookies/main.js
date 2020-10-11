// 455. assign cookies
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => b-a)
    s.sort((a,b) => b-a)
    let si = 0, gi = 0, res = 0
    while(gi<g.length && si<s.length) {
        if(s[si] >= g[gi]) {
            res++
            si++
            gi++
        }
        else {
            gi++
        }
    }
    return res
};
// 393. in subsequence