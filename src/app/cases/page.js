


export default async function Page() {

    const res =  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/User-Cases?[populate][picture]`, {

        headers: {
            'Authorization': "Bearer 8eec51f7f8bb98d277f49e44633c5b7b221a0b3c44a712f2c462497f46539e4ab7392c43c1b6d19a37ecaf329e7f8ae1d63b39a99d912ec4c7ee7abd85bf11cc1fe2817eb105626d365cb135427e935d34e1832799e15b670015251e5f02da902195dc08b679ce92fb00be2647c9289ddb1714324f8e4182fae5e46f1ded6507",
        }

    })

    const data = await res.json()

console.log('dtata', data)


    return (<div>hhd</div>)


    

}