export const getUserData = (total: number) => {
    return Array(total).fill({}).map((_data, index) => {
        return {
            user_name: `user${index + 1}`,
            email: `user${index + 1}@test.com`,
            orders: Math.floor(Math.random() * 100) + 1,
            contact_number: `63546${index + 1}`,
            id: `2dr${index + 1}d7h5rde5h46${index + 1}`
        }
    });
}
