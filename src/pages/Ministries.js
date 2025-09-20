import React from "react";
import prison from "../Assets/Images/ministry/prison.jpg";
import pbootcamp from "../Assets/Images/flyers/p-bootcamp.jpg";
import prayerwatch from "../Assets/Images/flyers/prayer-watch.jpg";
import corporateImage from "../Assets/Images/profile/CharlesAladeprofile1.jpg";
import SM from "../Assets/Images/ministry/singlesMarried.jpg"

const Ministries = () => {
  const ministries = [
    {
      title: "Jesus Behind Bars",
      text: "Through this outreach, we bring the Word of God, intercessory prayers, mentorship, and practical support to inmates—helping them experience transformation, deliverance from spiritual oppression, and the courage to embrace a crime-free life upon re-entry into society. Our conviction is simple: No one is beyond God’s reach. Even behind prison walls, destinies can be recharged, hope restored, and lives made whole in Christ Jesus.",
      picture: prison,
    },
    {
      title: "Prophetic BootCamp",
      text: "The Prophetic BootCamp is an intensive spiritual training designed to equip believers, ministers, and emerging prophets with the knowledge, discipline, and spiritual sensitivity needed to function effectively in the prophetic ministry. Hosted under the leadership of Apostle Charles Alade, this transformative encounter provides in-depth teaching, practical impartation, and activation of prophetic gifts. Participants learn how to hear God’s voice clearly, interpret prophetic signs, and minister with accuracy, humility, and compassion.\n\nOur goal is to raise a generation of prophetic voices who will edify, exhort, and comfort the Body of Christ, while standing as bold witnesses of Christ in the nations.\n\nKey Features:\n- Apostolic and prophetic teachings\n- Practical workshops and prayer sessions\n- Prophetic impartation and activation\n- Networking with like-minded believers\n\nWhether you are just discovering your prophetic calling or seeking to sharpen your gift, the Prophetic BootCamp will recharge you for a life of relevance, impact, and Kingdom service.",
      picture: pbootcamp,
    },
    {
      title: "Global Prophetic Prayer Watch",
      text: "The Global Prophetic Prayer Watch is not just another prayer meeting — it is a spiritual retreat, a 24-hour prophetic convocation where believers set aside time to wait on God through dry fasting and consecration.\n\nEvery second Friday of the month, intercessors, ministers, and watchmen gather to observe the 8 biblical prayer watches, covering the entire day and night in cycles of prayer, worship, and prophetic intercession.\n\nThis sacred retreat is designed for:\n- Deep Consecration – separating ourselves unto God through fasting and prayer.\n- Prophetic Alignment – discerning times and seasons while releasing declarations that shape destinies.\n- Unbroken Intercession – standing in the gap for families, nations, and the Body of Christ across the 8 watches.\n\nThe Global Prophetic Prayer Watch is more than an event; it is a call to the altar, raising a global network of watchmen who fast, pray, and prophesy until revival flames spread to the nations.",
      picture: prayerwatch,
    },
    { 
      title: "Night of Glory – An Interdenominational Monthly Encounter",
      text: "Night of Glory is a monthly interdenominational gathering where believers come together to experience the undeniable presence and power of God. It is a night of intense worship, fervent prayers, prophetic release, and life-transforming encounters designed to revive hearts and empower destinies.\nThis meeting welcomes people from all walks of life and across denominational lines, creating a united altar of worship and breakthrough. Each Night of Glory is a spiritual atmosphere where burdens are lifted, miracles happen, and lives are recharged for Kingdom exploits.",
      picture: pbootcamp,
    },
    
    { 
      title: "Singles & Married Ministry",
      text: "The Singles & Married Ministry at Recharge Church is designed to empower individuals and couples to build godly relationships, strong families, and lasting legacies. We believe that healthy homes create healthy societies, and every stage of life—singlehood, courtship, and marriage—is a divine opportunity to grow in Christ.\nThrough interactive sessions, counseling, retreats, and special programs, we provide biblical guidance for singles preparing for marriage, and equip couples to thrive in love, faith, and purpose. Our goal is to raise Kingdom families that reflect Christ’s love, demonstrate unity, and influence generations.",
      picture: SM,
    },
    { 
      title: "Code REDD – A Mind Shift Experience",
      text: "Code REDD is more than just an event—it’s a movement for transformation and growth. Designed to spark a mental reset, Code RED equips individuals with timeless wisdom, practical strategies, and inspiring stories to help them navigate life, business, and career while unlocking their full potential.\nThrough its dynamic events and podcast platform, Code RED provides access to deep insights that can help you 10x your performance across all spheres of life. From time to time, we host Captains of Industries and highly successful individuals who share their journeys, principles, and lessons to inspire and empower our community across diverse walks of life.\nAt Code RED, you don’t just attend—you elevate your mindset, sharpen your vision, and accelerate your journey to success.",
      picture: corporateImage,
    },
  ];

  return (
    <section className="px-6 md:px-16 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-12">
        Our Ministries
      </h2>

      <div className="space-y-16">
        {ministries.map((ministry, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Ministry Image */}
            <div className="md:w-1/2">
              <img
                src={ministry.picture}
                alt={ministry.title}
                className="rounded-2xl shadow-lg w-full h-[320px] object-cover"
              />
            </div>

            {/* Ministry Content */}
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold text-orange-500">
                {ministry.title}
              </h3>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {ministry.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ministries;