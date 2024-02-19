'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
})
{
 
  return (
    <div className="error_page _container">
      <h2 style={{color: 'red'}}>Что-то пошло не так(((</h2>
      <br></br>
      {error.message}
    </div>
  )
}