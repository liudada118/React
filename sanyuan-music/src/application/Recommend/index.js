import * as actionTypes from './store/actionCreators'
import React, { useEffect, useState, memo } from 'react';
import { connect } from 'react-redux';
function Recommend(props) {
  const { recommendList, enterLoading, banners } = props
  console.log(recommendList, enterLoading, banners, '---------');
  const { getRecommendListDataDispatch, getBannersDataDispatch } = props
  useEffect(() => {
    if (!recommendList.length) {
      getRecommendListDataDispatch();
    }
    if (!banners.length) {
      getBannersDataDispatch()
    }
  }, [])
  return (
    <>
      {recommendList.length ? recommendList.data[0].id : null}
    </>
  )
}

const mapStateToProps = (state) => ({
  recommendList: state.recommend.recommendList,
  banners: state.recommend.banners,
  enterLoading: state.recommend.enterLoading
})
const mapDispatchToProps = (dispatch) => {
  return {
    getRecommendListDataDispatch() {
      dispatch(
        actionTypes.getRecommendList()
      )
    },
    getBannersDataDispatch() {
      dispatch(
        actionTypes.getBanners()
      )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));