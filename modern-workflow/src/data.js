const users = [
    {name: 'ryu', premium: true},
    {name: 'luigi', premium: false}
];

const getPremUsers = (users) => {
    return users.filter(user => user.premium);
};

export { getPremUsers, users as default };