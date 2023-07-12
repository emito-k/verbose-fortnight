require('dotenv').config();

function force(m, a) {
    return m*a;
}

function universalGravitation(m1, m2, r) {
    const G = Number(process.env.G);
    return G*m1*m2/(r**2);
}

module.exports = {force, universalGravitation};