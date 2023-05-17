import SingleNavlinks from "./SingleNavlinks";


const Navlinks = () => {

  const priorities = ['HONEST GOVERNMENT', 'Reconciliation', 'Environment', 'Peace', 'Civil Liberties']
  const action = ['Volunteer', 'Get Updates', 'Spread the Word', 'Events']
  const news = ['Interviews', 'News Coverage', 'Articles', 'Press']
  const about = ['About Robert F.Kennedy, Jr.', 'Contact Us']
  return (
      <div className="space-x-6 ml-20 hidden lg:flex">
      <SingleNavlinks text='Priorities' drop lists={priorities } />
          <SingleNavlinks text='Take Action' drop lists={action } />
          <SingleNavlinks text='News' drop lists={news }/>
          <SingleNavlinks text='MERCH' />
          <SingleNavlinks text='Videos' />
          <SingleNavlinks text='About' drop lists={about }/>
    </div>
  )
}

export default Navlinks