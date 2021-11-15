// this is an example payload for the results of which stocks we will recommend to the user
stockPayload = {
    stock: {
        Apple: {
            ticker: '$APPL',
            attributes: {
                category_1: 'technology',
                category_2: 'low-vol',
                category_3: 'dividends',
                category_4: '',
                category_5: '',
            }
        },
        Amazon: {
            ticker: '$AMZN',
            attributes: {
                category_1: 'technology',
                category_2: 'low-vol',
                category_3: '',
                category_4: '',
                category_5: '',
            }
        },
        Facebook: {
            ticker: '$FB',
            attributes: {
                category_1: 'technology',
                category_2: 'med-vol',
                category_3: '',
                category_4: '',
                category_5: '',
            }
        },
        Cloudlfare: {
            ticker: '$NET',
            attributes: {
                category_1: 'technology',
                category_2: 'med-vol',
                category_3: '',
                category_4: '',
                category_5: '',
            }
        }
    }
}

// this is an example payload for the results of the sentiment analysis
sentimentPayload = {
    stock: {
        Apple: {
            ticker: '$APPL',
            sentiment: 0.349
        },
        Amazon: {
            ticker: '$AMZN',
            sentiment: 0.517
        },
        Facebook: {
            ticker: '$FB',
            sentiment: -0.140
        },
        Cloudflare: {
            ticker: '$NET',
            sentiment: 0.218
        },
    }
}

