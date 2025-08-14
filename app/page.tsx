import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Calendar, Shield, Zap, Users, Target } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden min-h-[600px]">
        <div className="absolute inset-0">
          <img
            src="images/ai-consultation-hero.png"
            alt="AI consultation background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-slate-900/90"></div>
        </div>

        {/* Enhanced Background Pattern */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <div className="grid grid-cols-6 gap-2 h-full opacity-20 p-8">
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-blue-400/30 to-cyan-400/20 aspect-square rounded-lg backdrop-blur-sm"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animation: "pulse 3s ease-in-out infinite",
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Floating Elements for Tech Feel */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/20 rounded-full backdrop-blur-sm animate-pulse"></div>
        <div className="absolute top-40 right-40 w-8 h-8 bg-cyan-400/30 rounded-full backdrop-blur-sm animate-bounce"></div>
        <div className="absolute bottom-32 right-16 w-12 h-12 bg-orange-400/20 rounded-full backdrop-blur-sm animate-pulse"></div>

        <div className="relative container mx-auto px-4 py-24 flex items-center min-h-[600px]">
          <div className="max-w-2xl">
            <div className="mb-8">
              <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white mb-6 px-4 py-2 font-medium shadow-lg text-2xl leading-6">
                🤖 AI顧問サービス
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                AIで迷ったら、
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                  "聞ける相手"
                </span>
                を。
              </h1>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                月1回の60分相談＋無制限メッセージで、つまずいたらすぐ聞ける。
                <br />
                <span className="text-blue-300 font-medium">むずかしい言葉は使いません。</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-lg shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <a href="https://forms.gle/EQsVPQ6kQb4n5tFd6" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  最初の相談内容を送る
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center space-x-8 text-sm text-gray-300">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-green-400" />
                安全な相談環境
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-400" />
                3,800人が信頼
              </div>
              <div className="flex items-center">
                <Target className="h-5 w-5 mr-2 text-orange-400" />
                実践的なアドバイス
              </div>
            </div>
          </div>
        </div>
        {/* </CHANGE> */}
      </section>

      {/* 3つのポイント */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full p-8">
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={i}
                className="bg-blue-600 aspect-square rounded-full"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animation: "pulse 4s ease-in-out infinite",
                }}
              ></div>
            ))}
          </div>
        </div>
        {/* </CHANGE> */}

        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-16 flex items-center justify-center">
            <span className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg mr-4 shadow-lg"></span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-blue-800">
              3つのポイント
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <Calendar className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-4 text-slate-800">
                  <span className="text-blue-600">POINT.1</span>
                  <br />
                  月1回面談
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  60分のオンライン面談で現状をヒアリング。あなたの業務に合う「この1ヶ月のAIレシピ」を確定します。
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <MessageCircle className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-4 text-slate-800">
                  <span className="text-green-600">POINT.2</span>
                  <br />
                  無制限相談
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  テキスト・音声でいつでも質問OK。つまずいた時にすぐ解決できるから、挫折しません。
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-4 text-slate-800">
                  <span className="text-purple-600">POINT.3</span>
                  <br />
                  安全重視
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  機密配慮・ローカル保存を前提とした運用方法。「やっていい範囲」を明確化します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3ステップ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-orange-50/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100/30 to-transparent rounded-full blur-3xl"></div>
        {/* </CHANGE> */}

        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-16 flex items-center justify-center">
            <span className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg mr-4 shadow-lg"></span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-orange-800">
              かんたん3ステップ
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">📝</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-slate-800">
                  <span className="text-blue-600">STEP.1</span>
                  <br />
                  申し込み
                </h3>
                <p className="text-gray-600 leading-relaxed tracking-normal font-bold">
                  申し込みフォームで困りごとを簡単に記入。
                  <br />
                  専門用語は不要です。
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🔍</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-slate-800">
                  <span className="text-orange-600">STEP.2</span>
                  <br />
                  面談
                </h3>
                <p className="text-gray-600 leading-relaxed font-semibold">
                  60分のオンライン面談で現状をヒアリング。
                  <br />
                  あなた専用の「AIレシピ」を作成します。
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">💬</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-slate-800">
                  <span className="text-green-600">STEP.3</span>
                  <br />
                  伴走開始
                </h3>
                <p className="text-gray-600 leading-relaxed font-bold">
                  無制限メッセージでつまずきをその都度解決。
                  <br />
                  安心して続けられます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 価格プラン */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-200/30 rounded-full blur-2xl"></div>
        </div>
        {/* </CHANGE> */}

        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-16 flex items-center justify-center">
            <span className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg mr-4 shadow-lg"></span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-blue-800">
              シンプル料金
            </span>
          </h2>

          <div className="max-w-lg mx-auto">
            <Card className="p-10 text-center border-0 shadow-2xl bg-white/90 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-orange-500"></div>

              <CardContent>
                <div className="mb-8">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-3">
                    月額 10,000円
                  </div>
                  <div className="text-gray-600">（＋税）／シンプル1プラン</div>
                </div>

                <div className="space-y-4 mb-10 text-left">
                  <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-600 mr-3 font-bold">①</span>
                    <span className="text-gray-700">オンライン面談60分×月1回</span>
                  </div>
                  <div className="flex items-start p-3 bg-green-50 rounded-lg">
                    <span className="text-green-600 mr-3 font-bold">②</span>
                    <span className="text-gray-700">無制限メッセージ相談（テキスト／音声OK）</span>
                  </div>
                </div>

                <Button asChild className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-4 text-lg shadow-xl transform hover:scale-105 transition-all duration-200">
                  <a href="https://forms.gle/EQsVPQ6kQb4n5tFd6" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-3 h-6 w-6" />
                    最初の相談内容を送る
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* よくある相談テーマ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/10 to-blue-50/10"></div>
        {/* </CHANGE> */}

        <div className="container mx-auto px-4 relative leading-7">
          <h2 className="text-3xl font-bold text-center mb-16 flex items-center justify-center">
            <span className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg mr-4 shadow-lg"></span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-orange-800">
              よくある相談テーマ
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI選び",
                description: "無料〜低額で始めるならどのAIが合う？",
                icon: <Target className="h-7 w-7" />,
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50",
              },
              {
                title: "業務テンプレート",
                description: "予約返信・見積り・お知らせ文の型を作りたい",
                icon: <Zap className="h-7 w-7" />,
                color: "from-orange-500 to-orange-600",
                bgColor: "bg-orange-50",
              },
              {
                title: "プロンプト作成",
                description: "短いプロンプトでも再現性高く回す型",
                icon: <MessageCircle className="h-7 w-7" />,
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-50",
              },
              {
                title: "社内ルール",
                description: "安全な使い方の最低限ルール策定",
                icon: <Shield className="h-7 w-7" />,
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50",
              },
              {
                title: "音声活用",
                description: "音声→文章をスマホ中心でラクに",
                icon: <Users className="h-7 w-7" />,
                color: "from-pink-500 to-pink-600",
                bgColor: "bg-pink-50",
              },
              {
                title: "文章作成",
                description: "台本・記事の初稿を素早く出すコツ",
                icon: <Zap className="h-7 w-7" />,
                color: "from-cyan-500 to-cyan-600",
                bgColor: "bg-cyan-50",
              },
            ].map((theme, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="pt-0">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${theme.color} shadow-lg`}>
                      <div className="text-white">{theme.icon}</div>
                    </div>
                    <div>
                      <h3 className="mb-3 text-slate-800 leading-6 tracking-normal text-base font-bold">{theme.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{theme.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 運営者プロフィール */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        </div>
        {/* </CHANGE> */}

        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-16 flex items-center justify-center">
            <span className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg mr-4 shadow-lg"></span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-blue-800">
              運営者プロフィール
            </span>
          </h2>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="md:flex">
                  {/* Profile Image Section */}
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-100/50 to-slate-100/50 p-10 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-orange-500/5"></div>
                    {/* </CHANGE> */}
                    <div className="text-center relative">
                      <div className="relative mb-6">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%95%E3%82%9A%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E5%86%99%E7%9C%9F.jpg-6iIDn1Ijc5VidxfO6b9xNO5requFVf.jpeg"
                          alt="奥村龍晃のプロフィール写真"
                          className="w-52 h-52 rounded-full mx-auto object-cover shadow-2xl border-4 border-white"
                        />
                        
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2 text-2xl">奥村 龍晃</h3>
                      <p className="text-gray-600 mb-4">（おくむら りゅうこう）</p>
                      <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 shadow-lg tracking-wider text-lg leading-4">
                        AI×整体の実践者
                      </Badge>
                    </div>
                  </div>

                  {/* Detailed Profile Content */}
                  <div className="md:w-2/3 p-10">
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-3"></span>
                        プロフィール
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        非エンジニア視点で、むずかしい設定に頼らず
                        <strong className="text-blue-600 font-bold">"今日からできるAI活用"</strong>へ翻訳。
                        個人事業・小規模店舗の現場に合わせて、続く運用を一緒に作ります。
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <span className="w-2 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full mr-3"></span>
                        実績
                      </h4>
                      <div className="space-y-4 font-normal">
                        <div className="flex items-start p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl">
                          <Badge className="bg-blue-600 text-white mr-4 mt-1 px-3 py-1">認定</Badge>
                          <span className="text-gray-700 font-black text-lg">Genspark公式アンバサダー</span>
                        </div>

                        <div className="flex items-start p-4 bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-xl">
                          <Badge className="bg-orange-600 text-white mr-4 mt-1 px-3 py-1">YouTube</Badge>
                          <div className="text-gray-700 text-base tracking-normal font-bold">
                            <div className="font-bold">「AI整体師チャンネル」運営</div>
                            <div className="text-gray-600 text-sm mt-1 font-medium">
                              AIニュース＆使い方を配信／登録者 約3,800人（2025年8月時点）
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start p-4 bg-gradient-to-r from-green-50 to-green-100/50 rounded-xl">
                          <Badge className="bg-green-600 text-white mr-4 mt-1 px-3 py-1">研修</Badge>
                          <div className="text-gray-700">
                            <div className="font-bold">整体院・整骨院向け 生成AI研修・顧問</div>
                            <div className="text-gray-600 text-sm mt-1">
                              安全運用（情報の取り扱い／ルール設計）と現場ワークフロー構築を実施
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-blue-500">
                      <p className="text-gray-700 italic leading-relaxed">
                        「現役の整体師として、エンジニアではない立場から、高機能よりも
                        <strong className="text-blue-600 font-bold">あなたの仕事に効く最小セット</strong>を一緒に選び、
                        続けられる形に整えます。」
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* おわりに */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
        </div>
        {/* </CHANGE> */}

        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-16 flex items-center justify-center">
            <span className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg mr-4 shadow-lg"></span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-blue-800">おわりに</span>
          </h2>

          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-10 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  AI相談サービスは、あなたの仕事に最適なAI活用をサポートします。エンジニアではない立場から、安全で効果的なAI活用を提案します。お気軽に相談ください。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="grid grid-cols-8 gap-4 h-full opacity-10 p-8">
            {Array.from({ length: 32 }).map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-blue-400/30 to-orange-400/20 aspect-square rounded-lg"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animation: "pulse 4s ease-in-out infinite",
                }}
              ></div>
            ))}
          </div>
        </div>
        {/* </CHANGE> */}

        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold mb-6">
            迷ったら、まずは
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">1ヶ月</span>
            。
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">困ったらすぐ聞ける相手として伴走します。</p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 text-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            <a href="https://forms.gle/EQsVPQ6kQb4n5tFd6" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-3 h-6 w-6" />
              最初の相談内容を送る
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">Copyright © AI相談サービス All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}
