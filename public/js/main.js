document.getElementById('linkForm').addEventListener('submit', async (e) => {
  e.preventDefault()
  const numero = document.getElementById('numero').value
  const mensagem = document.getElementById('mensagem').value

  const res = await fetch('/api/gerar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ numero, mensagem })
  })

  const data = await res.json()
  document.getElementById('resultado').innerHTML = `
    <a href="${data.link}" target="_blank">${data.link}</a>
  `
})
