import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../component/ui/Button'
import Container from '../component/ui/Container'
import PageLayout from '../layouts/PageLayout'
import NotesList from '../component/NotesList'

const HomePage = () => {
    return (
        <PageLayout>
          <Container>
            <Link to="/add">
              <Button>Add New Note</Button>
            </Link>
            <h1>All Notes</h1>
            <NotesList />
          </Container>
        </PageLayout>
    )
}

export default HomePage
