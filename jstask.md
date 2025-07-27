// find the index of string in the array

const list = [[1,2,3], false, 4, 'hello',];

for (let i = 0; i < list.length; i++){
  if(typeof list[i] == 'string'){
    console.log(`Index of array ${i}`)
  }
}

list.forEach((item,i) => {
  if (typeof item == 'string'){
    console.log(`String index ${i}`)
  }

})

// collect all arrays in one Array

const list = [[1,2,3], false, 4, [1,2,3],'hello',];
const newList = [];

list.forEach((item)=>{
  const res = Arrat.isArray(item)
  if (res){
    item.forEach((number)=>{
      newList.push(number)
    })
  }
})

// collect falsey elements in one array

const chech = [null, 'false', 0, 99, false, undefined, '', NaN, '0']

const falsey = []

chech.forEach((item) =>{
  if (!item){
    falsey.push(item)
  }
})

console.log(falsey)



<!-- cladue code  -->

// 1. Processing API responses - cleaning and normalizing data
const users = apiResponse.map(user => ({
    ...user,
    name: user.name.trim().toLowerCase(),
    email: user.email?.toLowerCase() ?? '',
    tags: user.tags?.split(',').map(tag => tag.trim()) || []
}));

// 2. URL path handling - very common in routing
const isValidRoute = path.startsWith('/api/v1/') &&
                    !path.includes('..');  // security check

// 3. Building query strings - used this countless times
const queryString = Object.entries(params)
    .filter(([_, value]) => value != null)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');

// 4. Data grouping - think analytics or reporting
const ordersByStatus = orders.reduce((acc, order) => {
    const status = order.status.toLowerCase();
    acc[status] = acc[status] || [];
    acc[status].push(order);
    return acc;
}, {});

// 5. Smart search function - used in autocomplete
const search = (items, query) => {
    const searchTerm = query.toLowerCase().trim();
    return items.filter(item =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
};

// 6. Processing CSV data - very common in data import features
const parseCSV = (csv) => {
    return csv.split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .map(line => line.split(',')
            .map(cell => cell.trim())
        );
};

// 7. Unique array with modern syntax - used in tag systems
const uniqueTags = [...new Set(
    items.flatMap(item => item.tags)
        .map(tag => tag.toLowerCase().trim())
)];

// 8. Last N items in a list - like recent activities
const getRecentItems = (items, n = 5) => {
    return items.slice(-n).reverse();
};

// 9. Pagination helper - used in literally every list view
const paginateItems = (items, page = 1, perPage = 10) => {
    return items.slice((page - 1) * perPage, page * perPage);
};

<!--  -->

<!-- 2nd part -->
function formatComments(comments) {
    return comments
        // First, clean up the data
        .map(comment => ({
            ...comment,
            text: comment.text.trim(),
            author: comment.author.toLowerCase(),
            timestamp: new Date(comment.timestamp)
        }))
        // Filter out empty or deleted comments
        .filter(comment =>
            comment.text.length > 0 &&
            !comment.isDeleted
        )
        // Group by date (using reduce)
        .reduce((acc, comment) => {
            const date = comment.timestamp.toDateString();
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(comment);
            return acc;
        }, {})
        // Sort comments within each day
        .map(dayComments =>
            dayComments.sort((a, b) =>
                b.timestamp - a.timestamp
            )
        );
}
<!--  -->