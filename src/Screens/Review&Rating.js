import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../Components/Headers/HeaderComponent';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import { FontFamily, images } from '../utils';
import { Rating } from 'react-native-ratings';
import WrapperContainer from '../Components/WrapperContainer';

// props for rating component
const ratingProps = {
    style: { backgroundColor: "none", paddingVertical: responsiveHeight(1) },
    imageSize: 20,
    ratingColor: "white",
    ratingBackgroundColor: "white",
    ratingTextColor: "white",
    readonly: true
};

// props for header component
const HeaderProps = {
    top_text: "Review & Ratings",
    bottom_text: "Vape Heaven",
    style: { backgroundColor: 'white' },
    icon: "close_icon"
}

// Reviews from backend
const reviews = [
    {
        profile_image: images.user1,
        id: 0,
        name: "Ronti Jordan",
        stars: 5,
        date: "10, May, 2023",
        review: "The product was great! I absolutely the vape! It was definitely a worth it buy! The product was great! I absolutely loved the vape! It was definitely a worth it buy!"
    },
    {
        profile_image: images.user2,
        id: 1,
        name: "Jenilliya Cartoos",
        stars: 3,
        date: "9, May, 2023",
        review: "The product was great! I absolutely the vape! It was definitely a worth it buy! The product was great! I absolutely loved the vape! It was definitely a worth it buy!"
    }, {
        profile_image: images.user3,
        id: 2,
        name: "Anjelina Joli",
        stars: 2,
        date: "3, Jan, 2023",
        review: "The product was great! I absolutely the vape! It was definitely a worth it buy! The product was great! I absolutely loved the vape! It was definitely a worth it buy!"
    }, {
        profile_image: images.user1,
        id: 3,
        name: "Ronti Jordan",
        stars: 2,
        date: "1, Jan, 2023",
        review: "The product was great! I absolutely the vape! It was definitely a worth it buy! The product was great! I absolutely loved the vape! It was definitely a worth it buy!"
    }
]
// from backend
const total_reviews = {
    total: 340,
    fiveStar: 250,
    fourStar: 40,
    threeStar: 30,
    twoStar: 15,
    oneStar: 5,
}
const reviews_progress = [
    {
        title: "5 stars",
        width: ((total_reviews.fiveStar / total_reviews.total) * 100),
        number: total_reviews.fiveStar,
        id: 0
    },
    {
        title: "4 stars",
        width: (total_reviews.fourStar / total_reviews.total) * 100,
        number: total_reviews.fourStar,
        id: 1
    },
    {
        title: "3 stars",
        width: (total_reviews.threeStar / total_reviews.total) * 100,
        number: total_reviews.threeStar,
        id: 2
    },
    {
        title: "2 stars",
        width: (total_reviews.twoStar / total_reviews.total) * 100,
        number: total_reviews.twoStar,
        id: 3
    },
    {
        title: "1 stars",
        width: (total_reviews.oneStar / total_reviews.total) * 100,
        number: total_reviews.oneStar,
        id: 4
    }
]
const total_avgStar = (5 * total_reviews.fiveStar + 4 * total_reviews.fourStar + 3 * total_reviews.threeStar + 2 * total_reviews.twoStar + 1 * total_reviews.oneStar) / total_reviews.total

const Orders = () => {
    return (
        <WrapperContainer style={{ backgroundColor: "#F5F5F5" }}>
            <HeaderComponent
                {...HeaderProps}
            />
            <View style={styles.top_review}>
                <View style={styles.left}>
                    <View style={styles.left_circle}>
                        <Text style={styles.left_text}>
                            {total_avgStar.toFixed(1)}
                        </Text>
                    </View>
                    <Text>{Math.floor(total_reviews.total / 100) * 100}+ reviews</Text>
                    <Rating {...ratingProps} startingValue={total_avgStar} />
                </View>
                <View style={styles.right}>
                    <FlatList
                        data={reviews_progress}
                        style={{}}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.progress}>
                                <Text>{item.title}</Text>
                                <View style={styles.bar}>
                                    <View style={[styles.bar_inside, { width: `${item.width.toFixed(0)}%` }]}>
                                    </View>
                                </View>
                                <Text>{item.number}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
            <FlatList
                data={reviews}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View
                        style={styles.review_container}>
                        <Image
                            source={item.profile_image}
                            style={styles.image}
                        />
                        <View style={{ width: '80%', height: 'auto' }}>
                            <View
                                style={styles.name_container}>
                                <Text
                                    style={styles.name}>
                                    {item.name}
                                </Text>
                                <Text style={styles.date}>
                                    {item.date}
                                </Text>
                            </View>
                            <View style={{ alignItems: "baseline", backgroundColor: "#F5F5F5" }}>
                                <Rating
                                    {...ratingProps}
                                    startingValue={item.stars}
                                    tintColor='#F5F5F5'
                                />
                            </View>
                            <Text
                                numberOfLines={3}
                                style={styles.description}>
                                {item.review}
                            </Text>
                        </View>
                    </View>
                )}
            />
        </WrapperContainer>

    );
};

export default Orders;

const styles = StyleSheet.create({
    left: {
        gap: responsiveHeight(1),
        alignItems: "center",
        justifyContent: "center"
    },
    right: {
        width: "auto",
        marginTop: responsiveHeight(2.5)
    },
    bar_inside: {
        height: responsiveHeight(0.8),
        backgroundColor: "#4361EE",
        borderRadius: 30
    },
    bar: {
        width: responsiveWidth(33),
        height: responsiveHeight(0.8),
        backgroundColor: "#F5F5F5",
        borderRadius: 30
    },
    progress: {
        marginVertical: responsiveHeight(0.6),
        flexDirection: "row",
        gap: responsiveWidth(2),
        alignItems: "center"
    },
    left_text: {
        color: "white",
        fontFamily: FontFamily.Extra_Bold,
        fontSize: responsiveFontSize(2)
    },
    left_circle: {
        height: responsiveHeight(6),
        width: responsiveHeight(6),
        borderRadius: 50,
        backgroundColor: "#4361EE",
        justifyContent: "center",
        alignItems: "center"
    },
    top_review: {
        gap: responsiveWidth(2),
        paddingHorizontal: responsiveWidth(3),
        width: "auto",
        marginTop: 10,
        borderRadius: 20,
        flexDirection: "row",
        backgroundColor: "white",
        marginHorizontal: "auto",
        marginBottom: responsiveHeight(1),
        height: responsiveHeight(22)
    },
    description: {
        fontFamily: FontFamily.Semi_Bold,
        lineHeight: responsiveHeight(2.3),
        color: '#959595'
    },
    review_wrapper: {
        alignItems: 'center',
        height: "auto"
    },
    name: {
        fontSize: responsiveFontSize(1.8),
        fontFamily: FontFamily.Semi_Bold,
        color: 'black',
    },
    date: {
        color: 'grey',
        fontFamily: FontFamily.Semi_Bold,
        fontSize: responsiveFontSize(1.5)
    },
    name_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    review_container: {
        width: responsiveWidth(85),
        height: 'auto',
        marginHorizontal: "auto",
        borderBottomWidth: 0.5,
        borderBottomColor: '#959595',
        flexDirection: 'row',
        gap: responsiveWidth(4),
        paddingVertical: responsiveHeight(4),
    },
    image: {
        width: responsiveWidth(12),
        height: responsiveWidth(12),
        borderRadius: responsiveWidth(10),
        marginTop: responsiveHeight(0.5),
    }
});
