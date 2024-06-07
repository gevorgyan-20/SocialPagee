const UseRequest = () => {
  const get = async(url) => {
    const result = await fetch(url)
    return result.json()
  }

  const post = async(url, data) => {
    const result = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data)
    })
    return result.json()
  }

  const deletee = async(url) => {
    const result = await fetch(url, {
      method: "DELETE"
    })
  }

  const put = async(url, data) => {
    const result = await fetch(url, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return result.json()
  }

  return {get, post, put, deletee};
}

export default UseRequest