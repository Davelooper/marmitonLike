import React from 'react'
import PropTypes from 'prop-types'
import firstNames from '../../../utils/const/firstNames'
import styled from 'styled-components/macro'
import { LoremIpsum } from 'lorem-ipsum'
import colors from '../../../utils/style/colors'
import generateRate from '../../../utils/functions/generateRate'
import generateStars from '../../../utils/functions/generateStars'
import likeSrc from '../../../utils/icons/like.svg'

const AuthorLogo = styled.div`
height: 50px;
width: 50px;
font-size: 28px;
border: 1px solid ${colors.primary};
border-radius: 50%;
color: ${colors.primary};
display: flex;
& > span {
    margin: auto;
}
`
const Head = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
max-width: 300px;
`
const LikePicture = styled.img`
width: 28px;
height: 28px;
`
const CommentDate = styled.p`
color: #998b89;
font-size: 12px;
`
const Content = styled.div`
display: flex;
flex-direction: column;
width: 33%;
border-right: 2px solid lightgrey;
& > p {
    padding: 0 10px 0 10px;
}
`

function Comment(props) {
    const author = firstNames[Math.floor(Math.random() * 276)]
    const date = randomDate(new Date(2012, 0, 1), new Date())
    const rate = generateRate()
    const stars = generateStars(rate)
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 3,
            min: 1
        },
        wordsPerSentence: {
            max: 7,
            min: 4
        }
    })

    return (
        <Content>
            <Head>
                <AuthorLogo><span>{author[0]}</span></AuthorLogo>
                <div>
                    <p>{author}</p>
                    <div>{stars}  <span>{rate} / 5</span></div>
                </div>
                <LikePicture src={likeSrc} />

            </Head>
            <CommentDate>{date.toLocaleDateString()}</CommentDate>
            <p>{lorem.generateParagraphs(1)}</p>

        </Content>
    )
}

Comment.propTypes = {

}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

randomDate(new Date(2012, 0, 1), new Date())

export default Comment

