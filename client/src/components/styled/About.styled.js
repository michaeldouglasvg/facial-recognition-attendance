import styled from 'styled-components';

export const AddStudentPage = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin: .1rem auto;
  padding: .6rem .1rem;
  background: whitesmoke;
  border-radius: 3px;
  box-shadow: ${({theme}) => theme.colors.boxshadowset};
  transition: all 500ms;
  background: ${({theme}) => theme.colors.body};
  color:  ${({theme}) => theme.colors.color};

  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    width: 88%;
    height: 80vh;
    margin-top: .6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`

export const NewStudentForm = styled.div`
  width: 98%;
  height: 60vh;
  padding: 1rem .8rem;
  margin: .2rem auto;
  background: ${({theme}) => theme.colors.body};
  color:  ${({theme}) => theme.colors.color};
  box-shadow: ${({theme}) => theme.colors.boxshadowset};

  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    width: 45%;
    box-shadow: ${({theme}) => theme.colors.boxshadowset};
    border-radius: 3px;
  }

  & > .Title{
    width: 100%;
    padding: 1rem .4rem;
    display: grid;
    place-items: center;
    border-bottom: 1px solid rgb(229, 228, 228);
    & > h1 {
      color: grey;
      font-size: 1.5rem;
    }
  }

  .Form {
    width: 98%;
    margin-top: 1rem;
    background: ${({theme}) => theme.colors.body};
    color:  ${({theme}) => theme.colors.color};
     
    & > form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      & > .Formgroups {
        width: 100%;
        margin: .4rem auto;
        padding: 1rem .6rem;

        p{
          color: grey;
          font-size: 1.5rem;
        }

        input{
          width: 100%;
          border: none;
          outline: none;
          padding: 1rem .6rem;
          margin-top: .4rem;
          font-size: 1.5rem;
          color: black;
        }
      }

      .btns{
        justify-content: flex-end;
      }
    }
  }
`

export const NewStudentScan = styled.div`
  width: 98%;
  height: 64vh;
  padding: 1rem .8rem;
  margin: .2rem auto;
  transition: all 500ms;
  background: ${({theme}) => theme.colors.body};
  color:  ${({theme}) => theme.colors.color};
  box-shadow: ${({theme}) => theme.colors.boxshadowset};
  
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    width: 45%;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, .1);
    border-radius: 3px;
  }

  & > .Title{
    width: 100%;
    padding: 1rem .4rem;
    display: grid;
    place-items: center;
    & > h1 {
      color: grey;
      font-size: 1.5rem;
    }
  }

  .MainDisplay{
    width: 98%;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${({theme}) => theme.colors.boxshadowset};

    .DisplayTitle {
      p{
        color: orange;
        font-size: 1.5rem;
        text-align: center;
        span{
          font-size: 1.5rem;
          color: green;
        }
      }
    }

    .ImageScanned{
      width: 300px;
      height: 300px;
      margin-top: 1rem;
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, .1);
      display: grid;
      place-items: center;
    }

    .RateScan{
      margin-top: 1rem;
      p{
        color: rgb(6, 209, 6);
        font-size: 1.3rem;
        text-align: center;
      }
    }
  }
`