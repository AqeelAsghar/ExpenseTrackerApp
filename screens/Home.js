import { FlatList, Image, ScrollView, Text, TouchableOpacity, View, StyleSheet, Animated } from 'react-native'
import React, { useState } from 'react'

import { COLORS, SIZES, FONTS, icons } from '../constants'
import { useRef } from 'react'
import { VictoryPie } from 'victory-native'
import { width } from '@mui/system'
import { Colors } from 'react-native/Libraries/NewAppScreen'


const Home = () => {
    
      // dummy data
    const confirmStatus = "C"
    const pendingStatus = "P"

    let categoriesData = [
        {
            id: 1,
            name: "Education",
            icon: icons.education,
            color: COLORS.yellow,
            expenses: [
                {
                    id: 1,
                    title: "Tuition Fee",
                    description: "Tuition fee",
                    location: "ByProgrammers' tuition center",
                    total: 100.00,
                    status: pendingStatus
                },
                {
                    id: 2,
                    title: "Arduino",
                    description: "Hardward",
                    location: "ByProgrammers' tuition center",
                    total: 30.00,
                    status: pendingStatus
                },
                {
                    id: 3,
                    title: "Javascript Books",
                    description: "Javascript books",
                    location: "ByProgrammers' Book Store",
                    total: 20.00,
                    status: confirmStatus
                },
                {
                    id: 4,
                    title: "PHP Books",
                    description: "PHP books",
                    location: "ByProgrammers' Book Store",
                    total: 20.00,
                    status: confirmStatus
                }
            ],
        },
        {
            id: 2,
            name: "Nutrition",
            icon: icons.food,
            color: COLORS.lightBlue,
            expenses: [
                {
                    id: 5,
                    title: "Vitamins",
                    description: "Vitamin",
                    location: "ByProgrammers' Pharmacy",
                    total: 25.00,
                    status: pendingStatus,
                },

                {
                    id: 6,
                    title: "Protein powder",
                    description: "Protein",
                    location: "ByProgrammers' Pharmacy",
                    total: 50.00,
                    status: confirmStatus,
                },

            ],
        },
        {
            id: 3,
            name: "Child",
            icon: icons.baby_car,
            color: COLORS.darkgreen,
            expenses: [
                {
                    id: 7,
                    title: "Toys",
                    description: "toys",
                    location: "ByProgrammers' Toy Store",
                    total: 25.00,
                    status: confirmStatus,
                },
                {
                    id: 8,
                    title: "Baby Car Seat",
                    description: "Baby Car Seat",
                    location: "ByProgrammers' Baby Care Store",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 9,
                    title: "Pampers",
                    description: "Pampers",
                    location: "ByProgrammers' Supermarket",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 10,
                    title: "Baby T-Shirt",
                    description: "T-Shirt",
                    location: "ByProgrammers' Fashion Store",
                    total: 20.00,
                    status: pendingStatus,
                },
            ],
        },
        {
            id: 4,
            name: "Beauty & Care",
            icon: icons.healthcare,
            color: COLORS.peach,
            expenses: [
                {
                    id: 11,
                    title: "Skin Care product",
                    description: "skin care",
                    location: "ByProgrammers' Pharmacy",
                    total: 10.00,
                    status: pendingStatus,
                },
                {
                    id: 12,
                    title: "Lotion",
                    description: "Lotion",
                    location: "ByProgrammers' Pharmacy",
                    total: 50.00,
                    status: confirmStatus,
                },
                {
                    id: 13,
                    title: "Face Mask",
                    description: "Face Mask",
                    location: "ByProgrammers' Pharmacy",
                    total: 50.00,
                    status: pendingStatus,
                },
                {
                    id: 14,
                    title: "Sunscreen cream",
                    description: "Sunscreen cream",
                    location: "ByProgrammers' Pharmacy",
                    total: 50.00,
                    status: pendingStatus,
                },
            ],
        },
        {
            id: 5,
            name: "Sports",
            icon: icons.sports_icon,
            color: COLORS.purple,
            expenses: [
                {
                    id: 15,
                    title: "Gym Membership",
                    description: "Monthly Fee",
                    location: "ByProgrammers' Gym",
                    total: 45.00,
                    status: pendingStatus,
                },
                {
                    id: 16,
                    title: "Gloves",
                    description: "Gym Equipment",
                    location: "ByProgrammers' Gym",
                    total: 15.00,
                    status: confirmStatus,
                },
            ],
        },
        {
            id: 6,
            name: "Clothing",
            icon: icons.cloth_icon,
            color: COLORS.red,
            expenses: [
                {
                    id: 17,
                    title: "T-Shirt",
                    description: "Plain Color T-Shirt",
                    location: "ByProgrammers' Mall",
                    total: 20.00,
                    status: pendingStatus,
                },
                {
                    id: 18,
                    title: "Jeans",
                    description: "Blue Jeans",
                    location: "ByProgrammers' Mall",
                    total: 50.00,
                    status: confirmStatus,
                },
            ],
        }
    ]

    // const categoryListHeightAnimationValue = useRef hook (new Anamated.Value(115)).current to access it value 
    const categoryListHeightAnimationValue = useRef(new Animated.Value(115)).current;
    // useState hook to set the View Mode list or chart 
    const [viewMode, setViewMode] = useState('chart')
    // useState hook to set the categoriesData into the FlatList
    const [categories, setCategories] = useState(categoriesData)
    // useState hook to set the selectedCategory 
    const [selectedCategory, setSelectedCategory] = useState(null)
    // useState hook to set the shoeMoreToggle which is by default is false 
    const [showMoreToggle, setShowMoreToggle] = useState(false)

    
    // ********************************************************************************************************************************
    // NavBar NavBar  Section that show the header of the chart
    function renderNavBar() {
        return (
            <View
                style={{
                // give a flexDirection is row to display it as a row 
                    flexDirection: 'row',
                    // height of the view is 80
                    height: 80,
                    // on Horizontal vise its space-between 
                    justifyContent: 'space-between',
                    // on vertical mode its flex end 
                    alignItems: 'flex-end',
                    // paddingHorizontal is sizes = 24 
                    paddingHorizontal: SIZES.padding,
                    // backgroundColor is white 
                    backgroundColor: COLORS.white
             }}
            >
                 {/* wrap image into the touchableOpacity to behave it like a button  */}
                <TouchableOpacity>
                    {/* in TouchableOpacity make a image tag  */}
                    <Image
                        // source is icons.back_arrow button 
                        source={icons.back_arrow}
                        style={{
                            // height and width is 30 
                            height: 30,
                            width: 30,
                            // tintColor is primary color
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>
                
                 {/* wrap image into the touchableOpacity to behave it like a button  */}
                <TouchableOpacity>
                    {/* in TouchableOpacity make a image tag  */}
                    <Image
                        // source is icons.back_arrow button 
                        source={icons.more}
                        style={{
                            // height and width is 30 
                            height: 30,
                            width: 30,
                            // tintColor is primary color
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
   
    // ******************************************************************************************************************************* 
    // function that display the header of the App 
    function renderHeader() {
        return (
            // View that hold our whole header components
            <View
                style={{
                // paddingvertical for top and bottom padding 
                paddingVertical: SIZES.padding,
                // paddingHorizontal for right and left padding 
                    paddingHorizontal: SIZES.padding,
                // backgroundColor is white 
                backgroundColor: COLORS.white, 
            }}
            >
                {/* in this view make a other view that for text  */}
                <View>
                    {/* Text with FONTS.h2 style and text color = color.primary  */}
                    <Text style={{...FONTS.h2, color: COLORS.primary}}>My Expense</Text>
                    {/* Text with FONTS.body4 style and text color = color.darkgray  */}
                    <Text style={{ ...FONTS.body4, color: COLORS.darkgray }}>Summary (Private)</Text>
                </View>
                {/* make another View which holds the calnder image + text  */}
                <View
                    style={{
                        // marginTop = 24
                        marginTop: SIZES.padding,
                        // flexDirection = is row to behave it like a row wise 
                        flexDirection: 'row',
                        // alignItems = center to center it vertically from top and bottom 
                        alignItems: 'center',
                 }}
                >
                    {/* a view to display the calnder image  */}
                    <View
                        style={{
                            // height and width is 50
                            height: 50,
                            width: 50,
                            // backgroundColor is lightGray 
                            backgroundColor: COLORS.lightGray,
                            // radius is 25 to make it like a circle 
                            borderRadius: 25,
                            // justifyContent & alignItems center to centerlize it 
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {/* image tag to display the calnder image*/}
                        <Image
                            source={icons.calendar}
                            style={{
                                // height and width is 20 and tintColor is lightBlue
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightBlue
                            }}
                        />
                    </View>
                    {/* make a view to display the text  */}
                    <View
                        style={{
                        // giving the marginLeft = 12 
                        marginLeft: SIZES.radius
                    }}
                    >
                        {/* text with font style h3 color is primary */}
                        <Text style={{...FONTS.h3, color: COLORS.primary}}>07 July 2022</Text>
                        {/* text with font style body color is darkgray */}
                        <Text style={{...FONTS.body4, color: COLORS.darkgray}}>18% more than last month</Text>
                    </View>
                </View>
            </View>
        )
    }

    // *******************************************************************************************************************************
    // renderCategories function that return the categories section into our App 
    function renderCategories() { 
        return (
            // View that hold the all categories component
            <View
                style={{
                    // marginVertical 24 for top and bottom margins
                    paddingVertical: SIZES.padding,
                    // flexDirection: is row 
                    flexDirection: 'row',
                    // justifyContent: 'space-between' to display it on the edges 
                    justifyContent: 'space-between',
                    // alignItems: 'center' to display it center vertically
                    alignItems: 'center',
                    // paddingHorizontal: 24 
                    paddingHorizontal: SIZES.padding,
                    backgroundColor: COLORS.white

            }}
            >
                {/* view to display the categories */}
                <View>
                    {/* text with font.h3 & color is primary */}
                    <Text style={{ ...FONTS.h3, color: COLORS.primary }}>CATEGORIES</Text>
                    {/* text with font.body4 and color is darkgray  */}
                    <Text style={{ ...FONTS.body4, color: COLORS.darkgray }}>07 total</Text>
                </View>
                {/* View that display the chart and menu   */}
                <View
                    style={{
                        // flexDirection is row to display it as a row wise 
                        flexDirection: 'row',
                        // alignItems center to centerlize from top and bottom
                        alignItems: 'center',
                    }}
                >
                    {/* touchableOpacity to make chart and munu touchable  */}
                    <TouchableOpacity
                        style={{
                            // height and width is 60
                            height: 60,
                            width: 60,
                            // borderRadius is 30 to make it rounded 
                            borderRadius: 30,
                            // backgroundColor if viewMode[which is useState we define upper] is equal to chart then display the backgroundColor secondary otherwise null
                            backgroundColor: viewMode == 'chart' ? COLORS.secondary : null,
                            // justifyContent and alignItems to centerlize the button 
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        // onPress setViewMode state = chart 
                     onPress = {() => setViewMode('chart')}

                    >
                        {/* Image to display the chart Image */}
                        <Image
                            source={icons.chart}
                            // resizeMode = contain
                            resizeMode='contain'
                            style={{
                                // width & height is 25 
                                width: 25,
                                height: 25,
                                //imageBackgroundColor if viewMode[which is useState we define upper] is equal to chart then display the imageBackgroundColor darkgray otherwise null
                                tintColor: viewMode == 'chart' ? COLORS.white : COLORS.darkgray
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{
                            // height and width is 60
                            height: 60,
                            width: 60,
                            // borderRadius is 30 to make it rounded 
                            borderRadius: 30,
                            // backgroundColor if viewMode[which is useState we define upper] is equal to line then display the backgroundColor secondary otherwise null
                            backgroundColor: viewMode == 'line' ? COLORS.secondary : null,
                            // justifyContent and alignItems to centerlize the button 
                            justifyContent: 'center',
                            alignItems: 'center',
                            // marginLeft= 24 
                            marginLeft: SIZES.padding
                        }}
                        // onPress setViewMode state = chart 
                        onPress = {() => setViewMode('line')}

                    >
                         {/* Image to display the menu Image */}
                        <Image
                            source={icons.menu}
                            // resizeMode style is contain
                            resizeMode='contain'
                            style={{
                                // width and height is 25 
                                width: 25,
                                height: 25,
                                //imageBackgroundColor if viewMode[which is useState we define upper] is equal to line then display the imageBackgroundColor darkgray otherwise null
                                tintColor: viewMode == 'line' ? COLORS.white : COLORS.darkgray
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    // *************************************************************************************************************************************************************
    // renderCategoryList 
    function renderCategoryList() {
        // renderItem function to render flatList renderItem
        const renderItem = ({ item }) => (
            // TouchableOpacity 
            <TouchableOpacity
                // onPress set the item inot the setSelectedCategory
                onPress={() => setSelectedCategory(item)}
                style={{
                    // flex:1
                    flex: 1,
                    // flexDirection: 'row',
                    flexDirection: 'row',
                    // margin:5
                    margin: 5,
                    // paddingVertical: 12
                    paddingVertical: SIZES.radius,
                    // paddingHorizontal: 24
                    paddingHorizontal: SIZES.padding,
                    // borderRadius: 5
                    borderRadius: 5,
                    // backgroundColor: white
                    backgroundColor: COLORS.white,
                    // give it the shadow for effect 
                    ...styles.shadow
                }}
            >
                {/* display: the image  */}
                <Image
                    source={item.icon}
                    style={{
                        // width,height is 20 
                        width: 20,
                        height: 20,
                        // tintColor is item.color 
                        tintColor: item.color
                    }}
                />
                {/* text is item.name  and marginLeft is 12 and color is primary , and font is h4 */}
                <Text style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h4 }}>{item.name}</Text>
            </TouchableOpacity>
        )

        return (
            // view that hold the lists of paddingHorizontal 
            <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
                {/* wrap the FlatList into the Animated View to perform animation */}
                <Animated.View style={{ height: categoryListHeightAnimationValue }}>
                    {/* FlatList */}
                    <FlatList
                        // data is categories
                        data={categories}
                        // renderItem is renderItem function which we make above return function 
                        renderItem={renderItem}
                        // keyExtractor is item.id on which base it extract data 
                        keyExtractor={item => `${item.id}`}
                        // number of columns is 2 means in 1 row there is 2 item or card
                        numColumns={2}
                    />
                </Animated.View>
                {/* make a touchableOpacity button more and less button  */}
                <TouchableOpacity
                    style={{
                        // flex: Direction is row 
                        flexDirection: 'row',
                        // marginVertical is 8
                        marginVertical: SIZES.base,
                        // justifyContent = center to centerlize the more and less 
                        justifyContent: 'center'
                    }}
                    // onPress of MORE and LESS button 
                    onPress={() => {
                        // if showMoreToggle is true then display then display Animated.timing categoryListHeightAnimationValue 
                        if (showMoreToggle) {
                            Animated.timing(categoryListHeightAnimationValue, {
                                // toValue is 115 to display the 4 card
                                toValue: 115,
                                // duration: is 300
                                duration: 300,
                                // useNativeDriver is false 
                                useNativeDriver: false
                                // start()
                            }).start();
                        } else {
                        // if showMoreToggle is false then display then display Animated.timing categoryListHeightAnimationValue 
                            Animated.timing(categoryListHeightAnimationValue, {
                                // toValue: 172.5 to display the 6 card 
                                toValue: 172.5,
                                // duration: 300
                                duration: 300,
                                // useNativeDriver: is false
                                useNativeDriver: false
                                // start()
                            }).start();
                        }
                        // onPress set the showMoreToggle to false
                        setShowMoreToggle(!showMoreToggle)
                    }}
                >
                    {/* Text is if showMoreToggle is true display LESS otherwise MORE */}
                    <Text style={{ ...FONTS.body4 }}>{showMoreToggle ? 'LESS' : 'MORE'}</Text>
                    {/* image  */}
                    <Image
                        // if showMoreToggle is true display arrow up otherwise arrow down 
                        source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
                        style={{
                            // height and width is 15
                            height: 15,
                            width: 15,
                            // alignSelf is center to centerlize the image
                            alignSelf: 'center',
                            // marginLeft: 8
                            marginLeft: SIZES.base
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }


     // ************************************************************************************************
    // function thta display the Incoming Expense Header 
    function renderIncomingExpenseHeader() {
        return (
            // view that hold header 
            <View
                style={{
                    // marginHorizontal: 24
                    marginHorizontal: SIZES.padding,
                    // backgroundColor: lightGray
                    backgroundColor: COLORS.lightGray2
            }}
            >
                {/* text with font style is h3 and color is primary */}
                <Text style={{ ...FONTS.h3, color: COLORS.primary }}>INCOMING EXPENSES</Text>
                {/* text with font style is h3 and color is darkgray*/}
                <Text style={{ ...FONTS.body4, color :COLORS.darkgray}}>12 Total</Text>
             </View>
         )
     }

    // ************************************************************************************************
    // 
    function renderIncomingExpense() {
        // make a let variable if selectedCategory is selected then access selectedCategory.expenses otherwise is blank Array
        let allExpenses = selectedCategory ? selectedCategory.expenses : []
        // Filter pending expenses from all Expenses 
        let incomingExpenses = allExpenses.filter(a => a.status === 'P')
        
        // renderItem functioin to display the render item with item, index as a parameter
        const renderItem = ({ item, index }) => (
            <View
                style={{
                    // width: 300,
                    width: 300,
                    // marginRight is 8 
                    marginRight: SIZES.base,
                    // marginLeft if index is 0 then 8 otherwise 0
                    marginLeft: index === 0 ? SIZES.base : 0,
                    // marginVertical is 8 
                    marginVertical: SIZES.radius,
                    // borderRadius is 8
                    borderRadius: SIZES.radius,
                    // backgroundColor is white
                    backgroundColor: COLORS.white,
                    // give the style.shadow
                    ...styles.shadow

            }}
            >
                {/* ********************************************************************************************* */}
                    {/* Title of the card */}
                    <View
                    style={{
                            // flexDirection is row 
                        flexDirection: 'row',
                        // padding is 8
                        padding: SIZES.base,
                            // alignItems is center to centerlize the card header
                            alignItems: 'center',
                        }}
                >
                    {/* View to display the image  */}
                        <View
                        style={{
                                // height and width is 50
                                height: 50,
                                width: 50,
                                // borderRadius is 15 
                            borderRadius: 15,
                                // backgroundColor is colors.lightGray
                            backgroundColor: COLORS.lightGray,
                                // alignItems and justifyContent is center to centerlize the content
                                alignItems: 'center',
                            justifyContent: 'center',
                                // padding is 8
                                padding: SIZES.base
                            }}
                        >
                        <Image
                            // source is selectedCategory.icon
                                source={selectedCategory.icon}
                            style={{
                                    // height and width is 25
                                    height: 25,
                                    width: 25,
                                    // tintColor is selectedCategory.color
                                    tintColor: selectedCategory.color
                                }}
                            />
                    </View>
                    {/* selectedCategory.name text with FONTS.h3 and color is selectedCategory.color*/}
                        <Text style={{ ...FONTS.h3, color: selectedCategory.color}}>{selectedCategory.name}</Text>
                    </View>

                    {/* Expense Description */}
                <View style={{ paddingHorizontal: SIZES.base }}>
                    {/* Title and description */}
                    {/* item.title text with  fonts.h2 */}
                    <Text style={{ ...FONTS.h2, }}>{item.title}</Text>
                    {/* item.description text with fonts.h3 flexWrap: wrap to control the outflow && color is color.darkgray   */}
                    <Text style={{ ...FONTS.body3, flexWrap: 'wrap', color: COLORS.darkgray }}>
                        {/* text is item.description */}
                        {item.description}
                    </Text>

                    {/* Location */}
                    {/* text with marginTop is 8 and font.h4 */}
                    <Text style={{ marginTop: SIZES.base, ...FONTS.h4, }}>Location</Text>
                    {/* display the item.location flexDirection is row */}
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            // source with icons.pin 
                            source={icons.pin}
                            style={{
                                // width and height is 20
                                width: 20,
                                height: 20,
                                // tintColor is color.darkgray
                                tintColor: COLORS.darkgray,
                                // marginRight is 5
                                marginRight: 5
                            }}
                        />
                        {/* text item.location with style marginBottom is 8 and color is darkgray and font is body4  */}
                        <Text style={{ marginBottom: SIZES.base, color: COLORS.darkgray, ...FONTS.body4 }}>{item.location}</Text>
                    </View>
                </View>
                {/* Price */}
                <View
                    style={{
                        // height is 50 
                        height: 50,
                        // alignItems & justifyContent is center to centerlize content
                        alignItems: 'center',
                        justifyContent: 'center',
                        // borderBottomStartRadius is 8 to giving the bottomStartRadius of card 
                        borderBottomStartRadius: SIZES.radius,
                        // borderBottomEndRadius is 8 to giving the bottomEndRadius of card 
                        borderBottomEndRadius: SIZES.radius,
                        // backgroundColor is selected.color 
                        backgroundColor: selectedCategory.color,
                    }}
                >
                    {/* text is confirm + item.total and show only 2 affter dot and then USD at the end  with color is white and FONTS.body3 */}
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>CONFIRM {item.total.toFixed(2)} USD</Text>
                </View>
                </View>
                )
    
        return (
            // a card height is 290 
            <View style={{ height: 290 }} >
                {/* in function call the renderIncomingExpenseHeader to display the card header */}
                {renderIncomingExpenseHeader()}
                {/* then if incomingExpenses length is greater than the 0 then display the flatlist */}
                {incomingExpenses.length > 0 &&
                    // data is incomingExpenses
                    <FlatList
                    data={incomingExpenses}
                    // renderItem is renderItem function 
                    renderItem={renderItem}
                    // keyExtractor is dynamic item.id
                    keyExtractor={item => `${item.id}`}
                    // show it as a horizontal
                    horizontal
                    // show Horizontal Scroll Indicator = false
                    showsHorizontalScrollIndicator={false}
                    />
                }
                {
                    // or of incomingExpenses lenght is 0 then show no record 
                    incomingExpenses.length == 0 &&
                    // View justifyContent, alignItems is center and height is 300
                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 300 }}>
                            {/* text with color is primary && Font is h2 */}
                            <Text style={{ color: COLORS.primary, ...FONTS.h2}}>No Record</Text>
                    </View>
                }
            </View>
        )
    }

    // *****************************************************************************************************************************
    // function to filter the victoryPie chart data 

    function processCategoryDataToDisplay() {
        // Filter expenses with "Confirmed" status
        let chartData = categories.map((item) => {
            // gather item with "Confirmed" status in confirmExpenses
            let confirmExpenses = item.expenses.filter(a => a.status == "C")
            // confirmExpenses reduce to a + b(total) or 0 
            var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0)
            // this loop return 
            return {
                // name is item name 
                name: item.name,
                // y is total 
                y: total,
                // expenseCount is number confirmExpenses.lenght 
                expenseCount: confirmExpenses.length,
                // color is item.color
                color: item.color,
                // id  item.id
                id: item.id
            }
        })

        // filter out categories with no data/expenses
        let filterChartData = chartData.filter(a => a.y > 0)

        // Calculate the total expenses
        let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0)

        // Calculate percentage and repopulate chart data
        let finalChartData = filterChartData.map((item) => {
            // item.y / totalExpense * 100 and Fixed it to 0
            let percentage = (item.y / totalExpense * 100).toFixed(0)
            return {
                // label: % 
                label: `${percentage}%`,
                // item.y  is change into number and then set into Y 
                y: Number(item.y),
                // expenseCount is item.expenseCount
                expenseCount: item.expenseCount,
                // color : item.color 
                color: item.color,
                // name is item.name 
                name: item.name,
                // id is item.id 
                id: item.id
            }
        })
        // and then return finalChartData to display data in a form of %
        return finalChartData
    }

    // ********************************************************************************************************************************
    // setSelectedCategoryByName by name 
    function setSelectedCategoryByName(name) {
        // category = categories.filter(c => c.name === name) the name 
        let category = categories.filter(c => c.name === name)
        // setSelectedCategory and give it category[0] index as a argument 
        setSelectedCategory(category[0])
}


// ************************************************************************************************************
    // function to render chart

    function renderChart() {
        // call a function processCategoryDataToDisplay and assign its value to chartData varaible
        let chartData = processCategoryDataToDisplay()
        // get the item color from chartData and assign it to the colorScales to give chart color 
        let colorScales = chartData.map((item) => item.color)
        // chartData.reduce ((a, b) => a + (b.expenseCount) or 0 
        let totalExpenseCount = chartData.reduce((a, b) => a + (b.expenseCount || 0), 0)


        return (
            // give a view justifyContent & alignItems center to centerlize it 
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {/* VictoryPie component to make a Pie chart */}
                <VictoryPie
                    // data is chartData 
                    data={chartData}
                    // colorScale = varaible colorScales
                    colorScale={colorScales}
                    // lables = dutum is dutum.y
                    labels={(dutum) => `${dutum.y}`}
                    // radius = (SIZES.width * 0.4 - 10)
                    radius={({ datum}) => (selectedCategory && selectedCategory.name === datum.name) ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10}
                    // innnerRadius for making it like a ring 
                    innerRadius={70}
                    // lables is innerRadius sizes.width *0.4 + innerRadius / 2.5 
                    labelRadius={({ innerRadius }) => (SIZES.width * 0.4 + innerRadius) / 2.5}
                    // give some custom styling 
                    style={{
                        // lables fill is colors.white and font is body3 
                        labels: { fill: COLORS.white, ...FONTS.body3 },
                        // and give the parent styles.shadow 
                        parent: {
                            ...styles.shadow
                        }
                    }}
                    // width and height is SIZES.width * 0.8 of screen 
                    width={SIZES.width * 0.8}
                    height={SIZES.width * 0.8}
                    // use Events to ditect the touch 
                    events={[{
                        // target is data 
                        target: 'data',
                        // eventHandlers 
                        eventHandlers: {
                            // onPress 
                            onPress: () => {
                                // return a array with object 
                                return [{
                                    // target is labels 
                                    target: "labels",
                                    // mutation events which take as a props 
                                    mutation: (props) => {
                                        // chartData array with [props.index] . name and asign it value to categoryName 
                                        let categoryName = chartData[props.index].name
                                        // setSelectedCategoryByName and give it a categoryName 
                                        setSelectedCategoryByName(categoryName)
                                    }
                                }]
                            }
                        }
                    }]}
                />
                {/* View to display the TotalExpense position is absolute from top is 42% and from left is 42% */}
                <View style={{ position: 'absolute', top: '42%', left: '42%' }}>
                    {/* text totalExpenseCount is fonts.h1 and textAlign is center  */}
                    <Text style={{ ...FONTS.h1, textAlign: 'center' }}>{totalExpenseCount}</Text>
                    {/* text totalExpenseCount is fonts.body3 and textAlign is center  */}
                    <Text style={{ ...FONTS.body3, textAlign: 'center' }}>Expense</Text>
                </View>
            </View>
        )
    }

    // ******************************************************************************************************************************************************
    // function renderExpenseSummary to display the expense summary

    function renderExpenseSummary() { 
        // data is equal to processCategoryDataToDisplay function 
        let data = processCategoryDataToDisplay()
        // renderItem to display the expense summary items
        const renderItem = ({item}) => {
            return (
                // wrap eveything into the touchableOpacity to make it touchable 
                <TouchableOpacity
                    style={{
                        // flexDirection: 'row'
                        flexDirection: 'row',
                        // height: 40
                        height: 40,
                        // paddingHorizontal is 12 
                        paddingHorizontal: SIZES.radius,
                        // borderRadius is 10 
                        borderRadius: 10,
                        // backgroundColor if selectedCategory exist and selectedCategory.name is equal to item.name then item color otherwise white 
                        backgroundColor: (selectedCategory && selectedCategory.name === item.name) ? item.color : COLORS.white
                    }}
                    // onPress 
                    onPress={() => { 
                        // make a variable categoryName = item name 
                        let categoryName = item.name
                        // setSelectedCategoryByName is categoryName 
                        setSelectedCategoryByName(categoryName)
                    }}
                >
                    {/* Name/Category */}
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}> 
                        {/* View to display the color square box  */}
                        <View
                            style={{
                                // width and height is 20 
                                width: 20,
                                height: 20,
                                // backgroundColor if selectedCategory exist and selectedCategory.name is equal to item.name then display color.white otherwise item.name 
                                backgroundColor: (selectedCategory && selectedCategory.name === item.name) ? COLORS.white : item.color,
                                // borderRadius is 5 
                                borderRadius: 5,
                            }}
                        >
                        </View>
                        {/* text to display the item.name with font h3 and Color if selectedCategory exist and selectedCategory.name is equal to item.name then white otherwise primary color  */}
                        <Text style={{...FONTS.h3 , marginLeft: SIZES.base, color: (selectedCategory && selectedCategory.name === item.name) ? COLORS.white : COLORS.primary}}>{item.name}</Text>
                    </View>
                    {/* view with style justifyContent center to centerlize it  */}
                    <View style={{ justifyContent: 'center' }}>
                        {/* text to display the item.y + USD + item.label with font h3 and Color if selectedCategory exist and selectedCategory.name is equal to item.name then white otherwise primary color  */}
                        <Text style={{ color: (selectedCategory && selectedCategory.name === item.name) ? COLORS.white : COLORS.primary, ...FONTS.h3 }}>{item.y} USD - {item.label}</Text>
                    </View>
                 </TouchableOpacity>
             )
         }

        // ***************************************************************************************************************************************************
        // return function that display the FlatList
        return (
            // View that displays the FlatList
            <View style={{ padding: SIZES.padding }}>
                {/* FlatList  */}
                <FlatList
                    // data is data variable
                    data={data}
                    // renderItem is renderItem function
                    renderItem={renderItem}
                    // keyExtractor is dynamic item.id 
                    keyExtractor={item => `${item.id}`}
                />
            </View>
        )
    }


    return (
    //   view that contain eveything into the app view 
        <View styles={{ flex: 1, backgroundColor: COLORS.black }}>
          {/* ******************************************************************************************************************************* */}
          {/* Nav bar Section  */}
          {renderNavBar()}
          {/* ******************************************************************************************************************************* */}
          {/* Header Section */}
          {renderHeader()}
          {/* ******************************************************************************************************************************* */}
          {/* Categories Section */}
            {renderCategories()}
            {/* make a scroll view with the style of paddingBottom = 60  */}
            <ScrollView contentContainerStyle={{
                // scrollable view which take bottom padding 60 
                paddingBottom: 60,
                // backgroundColor is lightGray2
                backgroundColor: COLORS.lightGray2
            }}>
                {/* if view mode is line then display the renderCategoryList */}
                {viewMode == 'line' && <View>
                    {/* display the Category List */}
                    {renderCategoryList()}
                    {/* display the IncomingExpense */}
                    {renderIncomingExpense()}
                </View>}
                {/* if view mode is line then display the renderCategoryList */}
                {viewMode == 'chart' && <View>
                    {/* display the Category chart */}
                    {renderChart()}
                    {/* display the the Expense Summary  */}
                    {renderExpenseSummary()}
 
                </View>}

            </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3
    }
})

