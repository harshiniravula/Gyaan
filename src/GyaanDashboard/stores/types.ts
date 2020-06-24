

export interface ReplyType{
    "comment_id": number,
    "commenter": {
    "user_id": number,
    "username": string,
    "profile_pic": string

    },
    "comment_at": string,
    "comment_content":string,
    "is_reacted": boolean,
    "reactions_count": number

}
export interface UserType{
  posted_by:{
    user_id: number,
    username: string,
    profile_pic: string
  }
}

export interface DomainType{
  domain: {
    domain_id: number,
    domain_name: string
}

}
export interface CommentType{

}

export interface PostType {
  
    post_id: number,
    title: string,
    posted_by: {
        "user_id": 26,
        "username": "Sonam",
        "profile_pic": "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg"
    },
    "domain": {
        "domain_id": 27,
        "domain_name": "UI/UX Design"
    },
    "is_reacted": boolean,
    "posted_at": string,
    "post_content": string,
    "reactions": {
        "reactions_count": 1
    },
    "comments_count": 5,
    "tags": [{
            "tag_id": 29,
            "tag_name": "UI discussions"
        },
        {
            "tag_id": 30,
            "tag_name": "UI solver"
        }

    ],


    "solution": {

        "comment_id": 31,
        "commenter": {
            "user_id": 32,
            "username": "Robin",
            "profile_pic": "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg"

        },
        "comment_at": "10/12/2020 2:00PM",
        "comment_content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        "is_reacted": true,



        "replies": [{

                "comment_id": 33,
                "commenter": {
                    "user_id": 34,
                    "username": "Rohan",
                    "profile_pic": "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg"

                },
                "comment_at": "string",
                "comment_content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
                "is_reacted": true,
                "reactions_count": 3

            },

            {
                "comment_id": 35,
                "commenter": {
                    "user_id": 36,
                    "username": "comenter2",
                    "profile_pic": "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg"

                },
                "comment_at": "string",
                "comment_content": "string wieguohhrt weroijhpklu gyyfwehjyuk fwgy9er46 e9h;u eoug4jpi ygyouln4 ",
                "is_reacted": true,
                "reactions_count": 3
            }
        ],
        "replies_count": 2,
        "reactions_count": 64
    },
    "comments": [{

        "comment_id": 37,
        "commenter": {
            "user_id": 38,
            "username": "zahid",
            "profile_pic": "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg"

        },
        "comment_at": "string",
        "comment_content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        "is_reacted": true,



        "replies": [{

                "comment_id": 39,
                "commenter": {
                    "user_id": 40,
                    "username": "comenter1",
                    "profile_pic": "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg"

                },
                "comment_at": "10/2/2020 5:00PM",
                "comment_content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
                "is_reacted": true,
                "reactions_count": 3

            },

            {
                "comment_id": 41,
                "commenter": {
                    "user_id": 42,
                    "username": "Sara",
                    "profile_pic": "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg"

                },
                "comment_at": "12/2/2020 5:00 AM",
                "comment_content": "sSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
                "is_reacted": true,
                "reactions_count": 3
            }
        ],
        "replies_count": 2,
        "reactions_count": 6
    }, {

        "comment_id": 43,
        "commenter": {
            "user_id": 44,
            "username": "Sara",
            "profile_pic": "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg"

        },
        "comment_at": "12/2/2020 5:00 PM",
        "comment_content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        "is_reacted": true,



        "replies": [{

                "comment_id": 45,
                "commenter": {
                    "user_id": 46,
                    "username": "comenter1",
                    "profile_pic": "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg"

                },
                "comment_at": "4/4/2020 4:00 PM",
                "comment_content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
                "is_reacted": true,
                "reactions_count": 3

            },

            {
                "comment_id": 47,
                "commenter": {
                    "user_id": 48,
                    "username": "Samul",
                    "profile_pic": "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg"

                },
                "comment_at": "3/3/2020 3:40PM",
                "comment_content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
                "is_reacted": true,
                "reactions_count": 3
            }
        ],
        "replies_count": 2,
        "reactions_count": 64
    }]

  }