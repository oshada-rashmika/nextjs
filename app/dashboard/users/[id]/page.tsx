const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
  return (
    <div>
        UserDetails
        <p>User ID: {id}</p>
    </div>
  )
}

export default UserDetails