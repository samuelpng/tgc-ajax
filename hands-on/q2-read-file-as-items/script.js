async function run() {
    let response = await axios.get('items.txt')
    console.log(response)
  }
run()