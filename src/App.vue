<template>
  <div h-max py-50 px-35 box-border mx-auto bg-white print:bg-transparent print:py-10 class="root">

    <h1 text-4xl text-center mb-8 mt-0 font-medium>
      二维电磁场的基本方程
    </h1>

    <div text-center mb-8 text-xl>
      郑博毅，熊桐睿
    </div>

    <div mb-3>
      <strong>摘要：</strong>
      地下流体注入可以用于油气开发、废液处理和地下水整治等，是一项广泛使用的技术。但它具有诱发地震的风险，而减少地震产生的最佳注入策略尚不清楚。本文通过分析地下流体注入诱发地震的成因，讨论孔隙压力和破裂压力的关系：当孔隙压力大于破裂压力时，地震难以避免；当孔隙压力小于破裂压力时，地层沿着预先存在的亚临界裂缝滑动，可以通过优化注入策略减少地震的产生。在第二种情况下，本文根据 Alghannam 和 Juanes 建立的多孔弹性弹簧-滑块模型，得出诱发地震的可能性主要取决于孔隙压力的增加速率。并由 Ruina 的稳定性条件进行模拟，给出了分段递增注入速率的注入策略。
    </div>

    <div>
      <strong>关键词：</strong>
      地下流体注入，诱发地震，多孔弹性弹簧-滑块模型，注入策略
    </div>

    <h2>
      0&emsp;引言
    </h2>

    <div p-1>
      <p>
        电磁学具有悠久的研究历史，远在公元前2750年，古埃及人就已经
      </p>
      <p>
        考虑到人类将来有可能会创建二维的虚拟世界，所以研究二维电磁理论是有必要的。因为在创建二维虚拟世界的过程中，需要人为设定其中的电磁规律。初步来看，二维的电磁理论似乎只需要将麦克斯韦方程组中所有量的z分量全部去掉，并保留x和y分量即可，但尝试后发现数学结构严重破坏，无法得到正常的结果。于是本文从电场的高斯定理出发，不断猜测并得到简洁的数学结构，实现了二维电磁场的震荡。
      </p>

      <p>
        然而，自二十世纪 60 年代以来，随着一系列与地下流体注入相关的地震事件被记录，学界认为地下流体注入具有诱发地震的风险 (<q>Healy, J., Rubey, W., Griggs, D. & Raleigh, C., 1968</q>)。虽然大多数注入引起的地震都是微震，但偶尔也会有较大的震级，例如 2011 年 Prague 5.7 级地震 (<q>Keranen, K. M., Weingarten, M., Abers, G. A., Bekins, B. A. & Ge, S., 2014</q>)，2016 年 Pawnee 5.8 级地震 (<q>Yeck, W. L. et al., 2017</q>) 和 2017 年 Pohang 5.5 级地震 (<q>Grigoli, F. et al., 2018</q>)，等等。此类地震有造成严重破坏的可能，危及了人们的生命和财产安全。随着地下流体注入技术的广泛使用，如何降低由该技术诱发的地震风险，已成为一个亟待解决的关键问题，这对于地下流体注入技术的进一步发展和应用构成了重大挑战。
      </p>

      <p>
        关于地下流体注入诱发地震现象的研究，学界建立了 3 种模型：
      </p>

      <p>
        根据库仑破坏模型，将流体压力的大小与诱发地震的发生联系起来 (<q>Hubbert, K. M. & Rubey, W. W., 1959</q>) 可得:
        $\tau_{crit} = (S - p) \operatorname{tan} \phi$
        其中 $\tau_{crit}$ 为断层发生滑动的临界剪切应力，$S$ 为总法向应力，$p$ 为孔隙压力，$\phi$ 为内摩擦角。上式表明将流体压力的大小保持在临界阈值以下，即可以避免地震的诱发。然而，该模型没有解决破裂的演变以及断层是地震滑动还是非震滑动，也不足以解释 Cogdell 油田的地震活动，如在低流体压力而不是高流体压力地区观察到地震 (<q>Davis, S. D. & Pennington, W. D., 1989</q>)。
      </p>
      <p>
        另一种模型将注入流体的累积体积与诱发地震的最大震级联系起来 (<q>McGarr, A., 2014</q>)，
        基于该模型，控制地震活动的一种策略是将注入流体的累积体积保持在临界阈值以下 (<q>Hofmann, H. et al., 2019</q>)，
        即通常假设下 $M_0 (max)=G\Delta V$ 其中 $M_0 (max)$ 为最大地震矩，$G$ 为岩石剪切弹性模量，$\Delta V$ 为注入体积。
        然而，该模型与 2017 年 Pohang 地震不一致，因为其震级超出了注入体积估计的500倍 (<q>Lee, K.-K. et al., 2019</q>)。
      </p>
      <p>
        Alghannam 和 Juanes 建立的多孔弹性弹簧-滑块注水诱发地震分析模型，解决这两种模型对于实际案例的缺陷。这种模型通过线性稳定性分析和非线性模拟，分析了粘滑摩擦失稳的产生条件，即地震的发生机制(<q>Alghannam, M., Juanes, R., 2020</q>)。本文主要基于此模型进行分析讨论。
      </p>
      <p>
        通过 Alghannam 和 Juanes 的多孔弹性弹簧-滑块模型，和 Ruina 的稳定性条件，我们可以分析不同注入策略下，临界刚度随时间变化的情况，从而得出地下流体注入诱发地震的可能性，并从中选择最佳的注入策略，减少地震的产生。得出的结论有一定可靠性和普适性，可为当下广泛使用的地下流体注入技术提供一定的参考和指导。
      </p>
    </div>

    <h2>
      1&emsp;方法
    </h2>

    <div p-1 mt--4>
      <h3>
        1.1&emsp;地震成因分析
      </h3>

      <div p-1>
        <p>
          地下流体注入向地层中施加了额外的压力，使得地层中的受力情况发生变化，从而引起地震 (<q>Healy, J., Rubey, W., Griggs, D. & Raleigh, C., 1968</q>)。
        </p>

        <p>
          诱发地震的过程根据孔隙压力与破裂压力的关系可以分为两种情况：
          <ol my-1 pl-16>
            <li>
              孔隙压力大于破裂压力，水力压裂，产生裂缝，造成微震云 (<q>Economides and Nolte, 2003</q>)；
            </li>
            <li>
              孔隙压力小于破裂压力，法向应力降低，裂缝滑动 (<q>Shapiro et al., 2002</q>)
            </li>
          </ol>
        </p>

        <h4>
          1.1.1&emsp;孔隙压力大于破裂压力的情况
        </h4>


        <div mt--8 mb-4 text-center fig-caption>
          <img src="./assets/1.png" w-110>
          <br>
          $\text{图 1}$: 孔隙压力大于破裂压力时产生裂缝的示意图
        </div>

        <p>
          当孔隙压力大于破裂压力时，我们假设注入时近似满足以下条件：
          <ul my-1 pl-16>
            <li>裂纹之间无相互作用</li>
            <li>裂缝平行地面</li>
            <li>注入源是一条直线（即钻孔）</li>
          </ul>
        </p>

        <p>
          此时地下流体注入诱发地震的基本过程如下：
          <ol my-1 pl-16>
            <li>注入时：液体通过钻孔注入岩层，裂缝扩展造成微震云 (microseismic cloud)；</li>
            <li>注入终止后：裂缝仍可继续穿透到一定程度，由于流体压力松弛诱发地震。</li>
          </ol>
        </p>

        <p>
          在这种情况下，诱发地震的性质由最初在注入源处产生的应力和孔隙压力扰动的增强过程控制 (<q>Economides and Nolte, 2003</q>)。
        </p>

        <p>
          由于当孔隙压力大于破裂压力时，无论在注入过程中还是注入终止后，裂缝都会扩展，诱发无法避免的地震。水力裂缝与断层的交互过程过于复杂且高度不可控，因此在实际工程中，应尽量避免这种情况的发生。
        </p>

        <h4 break-before-page>
          1.1.2&emsp;孔隙压力小于破裂压力的情况
        </h4>
        <div mb-4 text-center fig-caption>
          <img src="./assets/earthquake_cause.png" alt="地震成因分析" w-110>
          <br>
          $\text{图 2}$: 孔隙压力小于破裂压力时诱发地震的示意图
        </div>
        <p>
          当孔隙压力小于破裂压力时，地下流体注入诱发地震的基本过程如下：
          <ol my-1 pl-16>
            <li>在进行地下流体注入之前，地层裂缝两侧原有的正应力 $\sigma_n$ 抵抗剪切应力 $\tau$ 阻止了地层错动；</li>
            <li>地下注入引起的孔隙压力 $P$ 对正应力 $\sigma_n$ 起到减小作用，使得有效的法向应力降低；</li>
            <li>于是有效的法向应力不足以阻止剪切应力 $\tau$，导致沿着预先存在的亚临界裂缝滑动，诱发地震。</li>
          </ol>
        </p>
        <p>
          这时，诱发地震的情况由最初在注入产生的孔隙压力决定，这依赖于注入源的注入速率和地层的扩散速率等性质。
        </p>
        <p>
          这种情况下，可以通过更好地控制注入速率来减少地震的诱发。下文将通过多孔弹性弹簧-滑块模型和 Ruina 的稳定性条件来分析这种情况下减少地震诱发的注入策略。
        </p>
      </div>

      <h3>
        1.2&emsp;多孔弹性弹簧-滑块模型
      </h3>

      <div p-1>
        <p>
          孔隙压力小于破裂压力时，地下流体注入可能触发地震。在这种情况下，地下地层的受力状态可以通过多孔弹性弹簧-滑块模型来描述。
        </p>

        <p>
          考虑一个单位面积的滑块，该滑块由水平弹簧的一端牵引，弹簧的另一端被约束为以稳定的滑移速率进行移动。该弹簧的刚度代表了滑动面与周围岩石之间的弹性相互作用力。滑块表示流体注入所驱动的变形过程，其中活塞垂直施加压力，并在充满流体的空间内压缩弹簧。在这个模型中，垂直的弹簧代表着岩石的骨架，滑块内的流体代表岩石孔隙中的流体，这些流体因流体注入而增加，因压力扩散而减少。
        </p>

        <p>
          该模型通过弹簧和滑块的相互作用，能够模拟地下流体注入过程中地层应力的变化。弹簧的刚度决定了地层对流体注入的响应速度和程度，而滑块的移动则反映了地层在流体注入压力作用下的变形。该模型阐述了地下流体注入与地震活动之间的关系，为预测和控制由流体注入诱发的地震提供了理论基础。通过调整模型中的参数，如弹簧刚度和滑移率，可以更精确地模拟不同地质条件下的地震风险。基于该模型，可以模拟不同注入策略下地震的发生概率。
        </p>

        <div text-center fig-caption mb-6>
          <img src="./assets/2.png" w-150 m-4>
          <br>
          $\text{图 3}$: 多孔弹性弹簧-滑块模型
          <br>
          ($v_0$ 为加载速度，$v$ 为块体速度，$\tau$ 为摩擦剪切力，$w$ 为活塞伸长率，\\
          $q$ 为注入速率，$p_0$ 为环境压力，$p$ 为滑块内部的压力)
        </div>

        <p>
          采用多孔弹性弹簧-滑块模型，我们可以构建方程组来描述多孔弹性弹簧滑块系统在孔隙压力变化下的运动情况，该方程组具有以下形式：
        </p>

        <math>
          \begin{aligned}
          \dot{U} &= V_0 - V \\
          \dot{V}\frac{1}{(T / 2\pi)^2} &= U -
          \frac{1}{k_s}\left[(\mu_{\star}+\hat{\alpha}\operatorname{ln}\frac{V}{V_{\star} }
          +\Theta)(\Sigma - P)\right] \\
          \dot{\Theta} &= -\frac{V}{d_c}(\Theta + \hat{b}\operatorname{ln}\frac{V}{V_{\star}
          })+\hat{\alpha}\frac{\dot{P} }{(\Theta - P)'} \\
          \dot{P} &= \frac{k_n^{\text{eff} } }{\eta L}(P_0 - P) + k_n^{\text{eff} }Q
          \end{aligned}
        </math>

        <p>
          其中 $U$ 是载荷点和滑块之间的相对位移，$V_0$ 为加载速度，$V$ 为滑移率，$T$ 为振动周期，$k_s$ 是剪切刚度，$V_*$ 是归一化滑移率，$μ_*$ 是适合滑移率 $V_*$ 时稳态的常数，$a$ 和 $b$ 分别是与滑动速率和状态变化相关的摩擦力的实验推导参数，$\Theta$ 是描述滑动表面的状态变量，$\Sigma$ 是总应力，$P$ 是滑块内部的压力（孔隙压力），$d_c$ 是特征滑移距离，$\hat{\alpha}$ 是介于 $0$ 和 $\mu$ 之间的比例因子，$k_n^{\text{eff} }$ 是有效法向刚度，$k$ 是渗透率，$\eta$ 是流体动态粘度，$L$ 是压力扩散长度，$P_0$ 是环境压力，$Q$ 是单位面积的体积注入速率。
        </p>

        <p>
          选择特征量 $u_c=d_c$, $v_c=V_*$, $\mu_c=\mu_*$, $p_c=P_0$, $\tau_c=\mu_*$ ($\Sigma-P_0$ ),$\theta_c=\mu_*$,
          $t_c=d_c/V_*$，将上述方程组无量纲化，可得到如下方程组：
        </p>

        <math>
          \begin{aligned}
          \dot{U} &= v_0 - v \\
          \dot{v} &= \frac{1}{\epsilon^2}\left[u-\frac{1}{k}(1+a\operatorname{ln}v+\theta)(\sigma-p)\right] \\
          \dot{\theta} &= -v(\theta+b\operatorname{ln}v)+\alpha\frac{\dot{p} }{(\sigma - p)'} \\
          \dot{p} &= c(p_0-p)+rq
          \end{aligned}
        </math>

        <p>
          其中归一化剪切刚度 $\kappa=\frac{k_s d_c}{τ_c}$, 归一化摩擦参数 $a=\frac{\hat{a} }{\mu_c}$, $b=\frac{\hat{b} }{\mu_c}$,
          $\alpha=\frac{\hat{\alpha } }{\mu_c}$, 归一化振荡周期或惯性与状态演化时间尺度的比率 $\epsilon=\frac{T}{2\pi
          t_c}$，是归一化振荡周期或惯性与状态演化时间尺度的比率，其范围可能为 $10^{-8}$ 至 $10^{-6}$，取决于破裂直径和横波速度。参数 $c=\frac{t_c k_n^{\text{eff} }k}{\eta
          L}$
          $r=t_c k_n^{\text{eff} }$ 是孔隙压力与状态演化时间尺度的归一化扩散率或比率，其范围可能为 $10^{-4}$ 至
          $10^1$，取决于储层渗透率、单轴体积模量和井断层距离。$q=\frac{Q}{p_c}$，参数 $rq$ 是归一化进样速率，范围可能为 $10^{-5}$ 至 $10^{-1}$，取决于注入速率和储液罐大小。
        </p>
      </div>

      <h3>
        1.3&emsp;稳定性分析
      </h3>

      <div p-1>
        <p>
          根据 Ruina 的稳定性条件，当系统的无量纲剪切刚度低于临界值 $\kappa_{crit}$ 时，系统发生<strong>粘滑</strong> (stick-slip，指伴有地震的间断性断层快速滑动)；当系统的无量纲剪切刚度高于临界值 $\kappa_{crit}$ 时，系统发生<strong>蠕滑</strong> (steady-sliding，指天然构造断层速率缓慢的无震滑动) (<q>Ruina, A., 1983</q>)。粘滑是地下流体注入诱发地震的主要机制。尽可能地将 $\kappa_{crit}$ 降低，可以减少粘滑的发生，更多地通过蠕滑来释放地层应力，从而减少地下流体注入诱发地震的可能性。下面我们将通过多孔弹性弹簧-滑块模型计算 $\kappa_{crit}$，以分析地下流体注入诱发地震的可能性。
        </p>

        <p>
          在多孔弹性弹簧-滑块模型中，系统的临界无量纲剪切刚度 $\kappa_{crit}$ 可由如下公式计算 (<q>Alghannam, M., Juanes, R., 2020</q>)：
        </p>

        <math>
          \kappa_{crit} = (b-a)(\sigma-p) + \frac{\alpha}{v_0} \dot{p}
        </math>

        <p>
          式中 $p$ 为无量纲孔隙压力大小，$\dot{p}$ 为孔隙压力变化率。该式表明具有不断变化的孔隙滑块系统的摩擦失稳性不仅取决于孔隙压力的大小，还取决于孔隙压力的变化率。流体注入早期，$\dot{p}$ 的不稳定作用占主导地位，导致临界刚度增加，更容易诱发地震；之后，随着孔隙压力的扩散，$p$ 逐渐增大，$\dot{p}$ 随之减小，$p$ 的稳定作用开始占主导地位，导致后期临界刚度降低，更不容易产生地震，并有中止地震的可能。
        </p>
      </div>

      <h3>
        1.4&emsp;注入策略选择
      </h3>

      <p>
        为了尽可能地减少地震的产生，我们需要尽可能降低 $\kappa_{crit}$。通过分析上述公式可得，为减少 $\kappa_{crit}$，需要使 $p$ 尽可能大的同时，尽可能减少 $\dot{p}$ 的值。
      </p>

      <p>
        同时，考虑到地下流体注入应用在实际工程中的工程成本和时间限制，$\dot{p}$ 不能仅仅通过减少注入量或增加注入时间来减少。为了选取最佳的地下流体注入策略，我们选取了数种典型的注入策略，通过模拟分析不同注入策略下临界刚度随时间变化的情况，选择最优的注入策略。临界刚度超过标准值时，系统发生粘滑，可能诱发地震；临界刚度低于标准值时，系统发生蠕滑，不会诱发地震。因此更好的注入策略应该使临界刚度尽可能低，诱发地震的概率更小。
      </p>
    </div>

    <h2>
      2&emsp;结果
    </h2>

    <div p-1>
      <p>
        根据上述理论，本文通过多孔弹性弹簧-滑块模型和 Ruina 的稳定性条件，模拟分析了多种典型的地下流体注入策略，计算出不同注入策略下临界刚度随时间变化的情况，得出了不同注入策略下，地下流体注入诱发地震的可能性。
      </p>

      <p>
        模拟时采用的参数如下：

        <math>
          \begin{aligned}
          b-a &= 0.01 \\
          c &= 3 \times 10^{-2} \\
          \frac{\alpha}{v_0} &= 0.5 \\
          p_0 &= 1 \\
          \sigma &= 2
          \end{aligned}
        </math>
      </p>

      <p break-before-page>
        模拟结果如下：
      </p>

      <div class="grid grid-cols-2 gap-y-6 result-figures pb-6">
        <div>
          <img src="./assets/figures/1.1.png" />
          <img src="./assets/figures/1.2.png" />
          <div> $\text{图 4}$: 快速匀速注入策略的模拟结果 </div>
        </div>
        <div>
          <img src="./assets/figures/3.1.png" />
          <img src="./assets/figures/3.2.png" />
          <div> $\text{图 5}$: 慢速匀速注入策略的模拟结果 </div>
        </div>
        <div>
          <img src="./assets/figures/8.1.jpg" />
          <img src="./assets/figures/8.2.jpg" />
          <div> $\text{图 6}$: 分2段递增注入策略的模拟结果 </div>
        </div>
        <div>
          <img src="./assets/figures/2.1.png" />
          <img src="./assets/figures/2.2.png" />
          <div> $\text{图 7}$: 分4段递增注入策略的模拟结果 </div>
        </div>
        <div>
          <img src="./assets/figures/4.1.png" />
          <img src="./assets/figures/4.2.png" />
          <div> $\text{图 8}$: 线性递增注入策略的模拟结果 </div>
        </div>
        <div>
          <img src="./assets/figures/7.1.png" />
          <img src="./assets/figures/7.2.png" />
          <div> $\text{图 9}$: 随时间3次方递增注入策略的模拟结果 </div>
        </div>
        <div>
          <img src="./assets/figures/5.1.png" />
          <img src="./assets/figures/5.2.png" />
          <div> $\text{图 10}$: $\frac 1 2$周期正弦曲线注入策略的模拟结果 </div>
        </div>
        <div>
          <img src="./assets/figures/6.1.png" />
          <img src="./assets/figures/6.2.png" />
          <div> $\text{图 11}$: 3周期正弦曲线注入策略的模拟结果 </div>
        </div>
      </div>

      <p>
        每组图片中，上方图像显示注入速率（蓝色）和孔隙压力（橙色）随时间的变化关系，下方图像显示临界刚度（灰色）随时间的变化关系。通过与注射前的临界刚度（下图中红色虚线）进行比较，超出注射前临界刚度的部分时间为地下流体注入容易诱发地震的时间，且注射后临界刚度越高，地震发生的可能性越大。
      </p>

      <p>
        根据上述理论，分析各模拟结果，可得分4段递增注入策略是所有典型诸如策略中地下流体注入诱发地震的可能性最小的策略（图 6）。在该策略下，临界刚度随着注射的进行有降低趋势，超出注射前临界刚度的部分时间较短，地下流体注入诱发地震的可能性最小。
      </p>

      <p>
        其他注入策略中，快速匀速注入策略（图 4）和慢速匀速注入策略（图 5）造成临界刚度的升高幅度较大，地下流体注入诱发地震的可能性较大。分2段递增注入策略（图 6）和分4段递增注入策略（图 7）效果相近。线性递增注入策略（图 8）和随时间3次方递增注入策略（图 9）不会产生临界刚度的长时间超标，但效果并非最为理想，且实际操作较为困难，不适合应用。$\frac 1 2$周期正弦曲线注入策略（图 10）和3周期正弦曲线注入策略（图 11）效果不佳，临界刚度随时间的变化较大，且在实际工程中操作复杂，亦不适合应用。因此，分4段递增注入策略是最佳的地下流体注入策略。
      </p>
    </div>

    <h2>
      3&emsp;结论
    </h2>

    <div p-1>
      <p>
        当孔隙压力大于破裂压力时，基于 Alghannam 和 Juanes 建立的多孔弹性弹簧-滑块模型，我们得出了地下流体注入时地层压力随时间和流体注入速率的变化关系。根据 Ruina 稳定性条件，较高的临界刚度会导致地震发生，因此较高的流体注入速率更有可能诱发地震活动。基于该结论，本文模拟分析了多种注入策略，计算出不同注入策略下临界刚度随时间变化的情况，分析得出，在满足实际工程中的时间和注入总量要求的情况下，分段递增注入速率的注入策略可以最大限度的减少地下流体注入诱发地震的可能性，是一种安全高效的注入策略。
      </p>

      <p>
        分段递增注入速率策略的特点是在注入过程中，将注入过程分为多个阶段，每个阶段内部的注入速率保持不变。同时，每一阶段的注入速率相比上一阶段有所增加，注入速率逐步提高，形成阶梯型的注入速率于时间关系曲线。这种注入策略使得地层孔隙压力呈更加平滑的阶梯型增长，而不是突然增加，给予断层处压力充足的稳定时间来抵消孔隙压力变化率的不稳定作用，将临界刚度基本控制在安全范围以内，最大限度地减少地震的发生。同时，注入速率能长期维持在较高水平，提高了注入效率，减少了注入时间，符合实际工程的成本要求。
      </p>
    </div>

    <h2>
      4&emsp;讨论
    </h2>

    <div p-1>
      <p>
        在当前的工程实践中，地下流体注入技术已成为一种关键的技术手段，被广泛应用在油气开发、废液处理、地下水整治等领域中，但是有诱发地震的风险。本文给出的分段递增注入速率策略是一种安全高效的注入方案，可以在保证注入效率的同时，减少地下流体注入诱发地震的产生，提高注入工作的安全性，具有一定的参考价值和实际意义，有助于推动地下流体注入技术的发展和应用。
      </p>

      <p>
        本文选择了与实际情况符合较好的多孔弹性弹簧-滑块模型和 Ruina 的稳定性条件，具有较高的理论可靠性。通过该模型，本文模拟分析了多种注入策略，计算出不同注入策略下临界刚度随时间变化的情况，涵盖了大部分典型的注入策略，因此得出的最优注入策略具有较高的实用性。
      </p>

      <p>
        然而，由于是采用模拟分析的方法，而不是通过数学方式解出解析解，因此并没有提出一种非常精确的注入方式，而是给出了一种较为典型的注入策略，具有一定的普适性，但在实际应用中还需要根据具体情况进行调整。
      </p>

      <p>
        本文关注了断层粘滑产生的地震效应，而忽略了蠕滑对地震活动的影响，单纯从临界刚度与粘滑的关系判断了地震的可能性。但在实际注入过程中，若蠕滑的断层段大小超过成核长度的临界值，蠕滑也会诱发地震。这种情况下，诱发地震的临界值仍与临界刚度成反比，即临界刚度越大越容易诱发地震，故不影响本文结论。
      </p>

      <p>
        本文所讨论的注入策略仅指流体注入速率随时间变化关系的选择，而在实际地下流体注入工程中，也可采取其他措施来减少地下注入诱发地震的产生，例如优选注入地点、改变注入深度、改变流体状态、多点同时注入、实时监测地层状况等。这些内容本文未涉及，值得进一步研究。
      </p>
    </div>

    <h2>
      5&emsp;参考文献
    </h2>

    <div p-1 font-serif>
      <div article-ref>Alghannam, M., Juanes, R. Understanding rate effects in injection-induced earthquakes. Nat Commun
        11, 3053 (2020).</div>
      <div article-ref>Davis, S. D. & Pennington, W. D. Induced seismic deformation in the Cogdell oil field of West
        Texas. Bull. Seismol. Soc. Am. 79, 1477–1495 (1989).</div>
      <div article-ref>Economides, Michael J., and Kenneth G. Nolte. Reservoir stimulation. Vol. 2. Englewood Cliffs,
        NJ: Prentice Hall, (1989).</div>
      <div article-ref>Grigoli, F. et al. The November 2017 Mw 5.5 Pohang earthquake: a possible case of induced
        seismicity in South Korea. Science 360, 1003–1006 (2018).</div>
      <div article-ref>Healy, J., Rubey, W., Griggs, D. & Raleigh, C. The Denver earthquakes. Science 161, 1301–1310
        (1968).</div>
      <div article-ref>Hofmann, H. et al. First field application of cyclic soft stimulation at the Pohang Enhanced
        Geothermal System site in Korea. Geophys. J. Int. 217, 926–949 (2019).</div>
      <div article-ref>Hubbert, K. M. & Rubey, W. W. Role of fluid pressure in mechanics of overthrust faulting: I.
        mechanics of fluid-filled porous solids and its application to overthrust faulting. Geol. Soc. Am. Bull. 70,
        115–166 (1959).</div>
      <div article-ref>Keranen, K. M., Weingarten, M., Abers, G. A., Bekins, B. A. & Ge, S. Sharp increase in central
        Oklahoma seismicity since 2008 induced by massive wastewater injection. Science 345, 448–451 (2014).</div>
      <div article-ref>Lee, K.-K. et al. Managing injection-induced seismic risks. Science 364, 730–732 (2019).</div>
      <div article-ref>McGarr, A. Maximum magnitude earthquakes induced by fluid injection. J. Geophys. Res. Solid Earth
        119, 1008–1019 (2014).</div>
      <div article-ref>Ruina, A. Slip instability and state variable friction laws. J. Geophys. Res. Solid Earth 88,
        10359–10370 (1983).</div>
      <div article-ref>Shapiro, S. A., C. Dinske, and E. Rothert, Hydraulic-fracturing controlled dynamics of
        microseismic clouds, Geophys. Res. Lett., 33, L14312, (2006).
      </div>
      <div article-ref>Shapiro, S. A., E. Rothert, V. Rath, and J. Rindschwentner. Characterization of fluid transport
        properties of reservoirs using induced microseismicity, Geophysics, 67, 212–220 (2002).
      </div>
      <div article-ref>Yeck, W. L. et al. Oklahoma experiences largest earthquake during ongoing regional wastewater
        injection hazard mitigation efforts. Geophys. Res. Lett. 44, 711–717 (2017).</div>
    </div>
  </div>
</template>

<style>
.root {
  --scale: 0.95;
  transform-origin: center 0;
  transform: scale(var(--scale));
  width: calc(1191px * var(--scale));
}

[fig-caption=""] {
  font-size: 0.94rem;
}

q {
  color: rgb(59, 124, 197)
}

q::before {
  content: ""
}

q::after {
  content: ""
}

p {
  margin: 2px 0px;
  text-indent: 2em;
}

li {
  text-indent: 0;
}

[article-ref=""] {
  padding-left: 2em;
  text-indent: -2em;
}

h2 {
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 16px;
  text-align: center;
}

h3 {
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  margin-top: 16px;
  margin-bottom: 8px;
}

h4 {
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.7rem;
  margin-top: 16px;
  margin-bottom: 8px;
}

.result-figures > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  break-after: avoid;
}

.result-figures > div > img {
  width: 100%;
}

.result-figures > div > img:first-child {
  margin-bottom: -54px;
}

.result-figures > div > img:nth-child(2) {
  clip-path: inset(24px 0 0 0);
}

.result-figures > div > div {
  font-size: 0.94rem;
  margin-top: -6px;
}

@page {
  size: A4;
  margin: 0;
  margin-top: 80px;
  margin-bottom: 80px;
}
</style>
