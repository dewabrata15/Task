/** Saya menggunakan javascript 

Diketahui data berikut ini.

type IComment = {
commentId: number;
commentContent: string;
replies?: IComment[];
}
*/

const comments = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 111,
                        commentContent: 'Haai juga hai jugaa'
                    },
                    {
                        commentId: 112,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 121,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            }
        ]
    },
    {
        commentId: 2,
        commentContent: 'Halooo'
    }
]

/** 5. Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua
balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar. **/

function countComments(comments){
    let total = 0;

    function countRecursive(commentList){
        commentList.forEach(comment =>{
            total++; //menghitung komentar yang ada
            if(comment.replies && comment.replies.length > 0){
                countRecursive(comment.replies) //menghitung reply komentar
            }
        })
    }
    countRecursive(comments)
    return total
}

console.log("Total Comments:", countComments(comments))